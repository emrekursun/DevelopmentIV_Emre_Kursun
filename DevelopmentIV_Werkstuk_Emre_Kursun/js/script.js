$(function () {
    console.log('linked');

    // Geef de class 'active' bij het drukken van een knop om te filteren.
    $('button').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });

    // Hier nemen we de data van de json file.
    fetch("json/entries.json").then(function (resp) {
            return resp.json();
        })
        .then(function (data) {

            console.log(data);

            // Hier nemen we de lengte van de json file.
            var totalItems = Object.keys(data.items).length;

            // Filter op basis van zoekbalk
            $("#searchFilter").on('keyup', function () { 
                for (var i = 0; i < totalItems; i++) {

                    // Bij elke input, maken we de #container2 leeg en nieuwe data komt erop
                    $("#container2").empty();
                    let zoekFilter = $(this).val();
                    console.log(zoekFilter);

                    // Hier gebruiken we new RegExp om delen van een String te nemen
                    let pattern = new RegExp(this.value, 'i');
                    // Hier gaan we binnen de "items" array van de json bestand loopen op basis van de item.name
                    let resultSet = data.items.filter(item => item.name.match(pattern) && this.value != '').map(item => `<a class="category">${item.name}</a>` + `<img class="thumbnail2" src=` + item['link-to-video'].metadata.thumbnail_url + `><br>`);

                    // Hier tonen we daarna de effectieve resultaten
                    $("#container2").append(resultSet);
                    console.log(resultSet);
                }
            });

            // Hier loopen we eigenlijk binnen 'totalItems' die de array items bevat.
            for (var i = 0; i < totalItems; i++) {
                // Hier maken we een lege div
                let div = $("<div>", {
                    class: data.items[i]["genre-v2"]
                });
                // Hier fetchen we de category
                let category = $(`<p class='category'>` + (data.items[i].category) + `<strong><br> </strong></p>`).appendTo(div);

                // Geef div een bepaalde class op basis van de category
                if (data.items[i].category == 'familie') {
                    $(div).addClass('familie');
                }

                if (data.items[i].category == 'volwassenen') {
                    $(div).addClass('volwassenen');
                }

                //  let created_by = $(`<p class='data'>` + JSON.stringify(data.items[i]["created-by"]) + `<strong><br> </strong></p>`).appendTo(div);

                // Thumbnail
                let thumbnail = $(`<img class="thumbnail" src=` + data.items[i]["link-to-video"].metadata.thumbnail_url + `><br>`).appendTo(div);
                // Video
                let video = $(`<a href=` + data.items[i]["link-to-video"].url + `><img class="play" src="images/shapes-and-symbols.png"></a><br><hr>`).appendTo(div);
                // Naam
                let name = $(`<p class='name'>` + (data.items[i]["name"]) + `</p>`).appendTo(div);
                // let created_on = $(`<p class='createdOn'>` + (data.items[i]["created-on"]) + `<strong><br> </strong></p>`).appendTo(div);
                let excerpt = $(`<p class='excerpt'>` + (data.items[i]["excerpt"]) + `<strong><br> </strong></p>`).appendTo(div);
                // keys
                let key_takeaways = $(`<p class='keyTakeaways'>` + (data.items[i]["key-takeaways"]) + `</p>`).appendTo(div);


                // Hier append ik alle data in een div met als ID '#container'
                $('#container').append(div);


                // VOLWASSENEN BUTTON FILTERING
                $('.volwassenenBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.volwassenenBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").hide();
                    } else {
                        $(".volwassenen").hide();
                    }

                    // Als beide actief zijn
                    if ($('.volwassenenBtn').hasClass('active') && $('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }

                    // Als beide niet actief zijn
                    if (!$('.volwassenenBtn').hasClass('active') && !$('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }
                });

                // FAMILY BUTTON FILTERING
                $('.familieBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.familieBtn').hasClass('active')) {
                        $(".familie").show();
                        $(".volwassenen").hide();
                    } else {
                        $(".familie").hide();
                    }

                    // Als beide actief zijn
                    if ($('.volwassenenBtn').hasClass('active') && $('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }

                    // Als beide niet actief zijn
                    if (!$('.volwassenenBtn').hasClass('active') && !$('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }
                });


                // GENRE FILTERING CODE

                $('.dansBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.dansBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".multidisciplinair").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".dans").show();
                    }


                    // Als beide actief zijn
                    if ($('.dansBtn').hasClass('active') && $('.theaterBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();

                    }
                    removeFilters();
                });

                $('.theaterBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.theaterBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".dans").hide();
                        $(".multidisciplinair").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".theater").show();
                    }


                    // Als beide actief zijn
                    if ($('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();

                    }
                    removeFilters();
                });

                $('.muziekBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.muziekBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".dans").hide();
                        $(".multidisciplinair").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".theater").hide();
                        $(".figurentheater").hide();
                        $(".muziektheater").hide();

                        $(".muziektheater").show();
                    }


                    // Als beide actief zijn
                    if ($('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {


                    }
                    removeFilters();
                });

                $('.concertBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.concertBtn').hasClass('active')) {

                        $(".dans").hide();
                        $(".theater").hide();
                        $(".multidisciplinair").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".concert").show();
                    }


                    // Als beide actief zijn
                    if ($('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                    }
                    removeFilters();
                });

                $('.multiBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.multiBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".dans").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".multdisciplinair").show();
                    }


                    // Als beide actief zijn
                    if ($('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                        $(".multidisciplinair").show();
                    }
                    removeFilters();
                });

                $('.literatuurBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.literatuurBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".dans").hide();
                        $(".multidisciplinair").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".literatuur").show();
                    }


                    // Als beide actief zijn
                    if ($('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                        $(".multidisciplinair").show();
                        $(".literatuur").show();
                    }
                    removeFilters();
                });

                $('.comedyBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.comedyBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".dans").hide();
                        $(".literatuur").hide();
                        $(".multidisciplinair").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".comedy").show();
                    }


                    // Als beide actief zijn
                    if ($('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                        $(".multidisciplinair").show();
                        $(".literatuur").show();
                        $(".comedy").show();
                    }
                    removeFilters();
                });

                $('.figurenBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.figurenBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".dans").hide();
                        $(".multidisciplinair").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".circus").hide();
                        $(".theater").hide();
                        $(".muziektheater").hide();

                        $(".figurentheater").show();
                    }


                    // Als beide actief zijn
                    if ($('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {


                    }
                    removeFilters();
                });



                $('.operaBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.operaBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".dans").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".multidisciplinair").hide();
                        $(".circus").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".opera").show();
                    }


                    // Als beide actief zijn
                    if ($('.operaBtn').hasClass('active') && $('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                        $(".multidisciplinair").show();
                        $(".literatuur").show();
                        $(".comedy").show();
                        $(".opera").show();
                    }
                    removeFilters();
                });

                $('.circusBtn').click(function (e) {
                    e.preventDefault();

                    // als enkel deze actief is
                    if ($('.circusBtn').hasClass('active')) {

                        $(".concert").hide();
                        $(".theater").hide();
                        $(".dans").hide();
                        $(".literatuur").hide();
                        $(".comedy").hide();
                        $(".opera").hide();
                        $(".multidisciplinair").hide();
                        $(".muziektheater").hide();
                        $(".figurentheater").hide();

                        $(".circus").show();
                    }


                    // Als beide actief zijn
                    if ($('.circusBtn').hasClass('active') && $('.operaBtn').hasClass('active') && $('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                        $(".dans").show();
                        $(".theater").show();
                        $(".concert").show();
                        $(".multidisciplinair").show();
                        $(".literatuur").show();
                        $(".comedy").show();
                        $(".opera").show();
                        $(".circus").show();
                    }
                    removeFilters();
                });

                function removeFilters() {
                    if (!$('button').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }
                }
            }
        });
})