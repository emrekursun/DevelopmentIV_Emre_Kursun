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


            // Add data to html
            /*
                        let entries = $(`<p class='data'>` + JSON.stringify(data.items) + `<strong><br> </strong></p>`).appendTo(div);
                        JSON.stringify(div);
            */
            // Hier nemen we de lengte van de json file.
            var totalItems = Object.keys(data.items).length;

            // Hier loopen we eigenlijk binnen 'totalItems' die de array items bevat.
            for (var i = 0; i < totalItems; i++) {
                // Hier maken we een lege div
                let div = $("<div>", {

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

                // genre filtering -NOT DONE-
                $('.genre').click(function () {
                    $('.genre').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                });

                //  let created_by = $(`<p class='data'>` + JSON.stringify(data.items[i]["created-by"]) + `<strong><br> </strong></p>`).appendTo(div);

                // Thumbnail
                let thumbnail = $(`<img class="thumbnail" src=` + data.items[i]["link-to-video"].metadata.thumbnail_url + `><br>`).appendTo(div); 
                // Video
                let video = $(`<a href=` + data.items[i]["link-to-video"].url + `><img class="play" src="images/shapes-and-symbols.png"></a><br><hr>` ).appendTo(div);
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
                    }
                    else {
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

                    // FAMILY BUTTON FILTERING
                    $('.familieBtn').click(function(e){
                        e.preventDefault();

                         // als enkel deze actief is
                        if ($('.familieBtn').hasClass('active')) {
                            $(".familie").show();
                            $(".volwassenen").hide();
                        }
                        else {
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
                });
            }
        });
})