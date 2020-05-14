$(function () {
    console.log('linked');

    $('button').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });


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
            var totalMessages = Object.keys(data.items).length;

            for (var i = 0; i < totalMessages; i++) {
                let div = $("<div>", {

                });
                let category = $(`<p class='category'>` + (data.items[i].category) + `<strong><br> </strong></p>`).appendTo(div);

                if (data.items[i].category == 'familie') {
                    $(div).addClass('familie');
                }

                if (data.items[i].category == 'volwassenen') {
                    $(div).addClass('volwassenen');
                }


                $('.genre').click(function () {
                    $('.genre').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                });

                //  let created_by = $(`<p class='data'>` + JSON.stringify(data.items[i]["created-by"]) + `<strong><br> </strong></p>`).appendTo(div);
                let name = $(`<p class='name'>` + (data.items[i]["name"]) + `</p>`).appendTo(div);
                let created_on = $(`<p class='createdOn'>` + (data.items[i]["created-on"]) + `<strong><br> </strong></p>`).appendTo(div);
                let excerpt = $(`<p class='excerpt'>` + (data.items[i]["excerpt"]) + `<strong><br> </strong></p>`).appendTo(div);
                let key_takeaways = $(`<p class='keyTakeaways'>` + (data.items[i]["key-takeaways"]) + `</p>`).appendTo(div);
                $('#container').append(div);

                // VOLWASSENEN BUTTON
                $('.volwassenenBtn').click(function (e) {
                    e.preventDefault();

                    if ($('.volwassenenBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").hide();
                    }
                    else {
                        $(".volwassenen").hide();
                    }

                    if ($('.volwassenenBtn').hasClass('active') && $('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }
                    
                    if (!$('.volwassenenBtn').hasClass('active') && !$('.familieBtn').hasClass('active')) {
                        $(".volwassenen").show();
                        $(".familie").show();
                    }

                    // FAMILY BUTTON
                    $('.familieBtn').click(function(e){
                        e.preventDefault();
                        if ($('.familieBtn').hasClass('active')) {
                            $(".familie").show();
                            $(".volwassenen").hide();
                        }
                        else {
                            $(".familie").hide();
                        }

                        if ($('.volwassenenBtn').hasClass('active') && $('.familieBtn').hasClass('active')) {
                            $(".volwassenen").show();
                            $(".familie").show();
                        }

                        if (!$('.volwassenenBtn').hasClass('active') && !$('.familieBtn').hasClass('active')) {
                            $(".volwassenen").show();
                            $(".familie").show();
                        }
    

                    });   
                });

            }
        });
})