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
                // Voeg een class toe voor elke specifieke genre
                let contains = data.items[i]["key-takeaways"];
                

                if (contains.indexOf("concert") >= 0) {
                    $(div).addClass('concert');
                }

                if (contains.indexOf("Concert") >= 0) {
                    $(div).addClass('concert');
                }

                if (contains.indexOf("theater") >= 0) {
                    $(div).addClass('theater');
                }

                if (contains.indexOf("Theater") >= 0) {
                    $(div).addClass('theater');
                }

                if (contains.indexOf("muziektheater") >= 0) {
                    $(div).addClass('muziektheater');
                }

                if (contains.indexOf("Muziektheater") >= 0) {
                    $(div).addClass('muziektheater');
                }

                if (contains.indexOf("dans") >= 0) {
                    $(div).addClass('dans');
                }

                if (contains.indexOf("Dans") >= 0) {
                    $(div).addClass('dans');
                }
                
                if (contains.indexOf("figurentheater") >= 0) {
                    $(div).addClass('figurentheater');
                }

                if (contains.indexOf("Figurentheater") >= 0) {
                    $(div).addClass('figurentheater');
                }
                
                if (contains.indexOf("multidisciplinair") >= 0) {
                    $(div).addClass('multidisciplinair');
                }

                if (contains.indexOf("Multidisciplinair") >= 0) {
                    $(div).addClass('multidisciplinair');
                }
                
                if (contains.indexOf("opera") >= 0) {
                    $(div).addClass('opera');
                }

                if (contains.indexOf("Opera") >= 0) {
                    $(div).addClass('opera');
                }
                
                if (contains.indexOf("literatuur") >= 0) {
                    $(div).addClass('literatuur');
                }

                if (contains.indexOf("Literatuur") >= 0) {
                    $(div).addClass('literatuur');
                }

                if (contains.indexOf("comedy") >= 0) {
                    $(div).addClass('comedy');
                }

                if (contains.indexOf("Comedy") >= 0) {
                    $(div).addClass('comedy');
                }

                if (contains.indexOf("circus") >= 0) {
                    $(div).addClass('circus');
                }

                if (contains.indexOf("Circus") >= 0) {
                    $(div).addClass('circus');
                }
                
                
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
                });

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


                    // GENRE FILTERING CODE
                    
                    $('.dansBtn').click(function(e){
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
                           
                            $(".dans").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.dansBtn').hasClass('active') && $('.theaterBtn').hasClass('active')) {
                            $(".dans").show();
                            $(".theater").show();
                            
                        }
                        removeFilters(); 
                    }); 
                    
                    $('.theaterBtn').click(function(e){
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
                           
                            $(".theater").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.theaterBtn').hasClass('active') && $('.dansBtn').hasClass('active')) {
                            $(".dans").show();
                            $(".theater").show();
                           
                        }
                        removeFilters(); 
                    });

                    $('.concertBtn').click(function(e){
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

                    $('.multiBtn').click(function(e){
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
                    
                    $('.literatuurBtn').click(function(e){
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
                           
                            $(".literatuur").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active')  && $('.dansBtn').hasClass('active')) {
                            $(".dans").show();
                            $(".theater").show();
                            $(".concert").show();
                            $(".multidisciplinair").show();
                            $(".literatuur").show();
                        }
                        removeFilters(); 
                    }); 

                    $('.comedyBtn').click(function(e){
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
                           
                            $(".comedy").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active')  && $('.dansBtn').hasClass('active')) {
                            $(".dans").show();
                            $(".theater").show();
                            $(".concert").show();
                            $(".multidisciplinair").show();
                            $(".literatuur").show();
                            $(".comedy").show();
                        }
                        removeFilters(); 
                    }); 

                    $('.operaBtn').click(function(e){
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
                           
                            $(".opera").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.operaBtn').hasClass('active') &&  $('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active')  && $('.dansBtn').hasClass('active')) {
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
                    
                    $('.circusBtn').click(function(e){
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
                           
                            $(".circus").show();
                        }
                        

                        // Als beide actief zijn
                        if ($('.circusBtn').hasClass('active') && $('.operaBtn').hasClass('active') &&  $('.comedyBtn').hasClass('active') && $('.literatuurBtn').hasClass('active') && $('.multiBtn').hasClass('active') && $('.concertBtn').hasClass('active') && $('.theaterBtn').hasClass('active')  && $('.dansBtn').hasClass('active')) {
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
                        if (!$('button').hasClass('active')){
                        $(".volwassenen").show();
                        $(".familie").show();
                        }
                    }
            }
        }); 
})