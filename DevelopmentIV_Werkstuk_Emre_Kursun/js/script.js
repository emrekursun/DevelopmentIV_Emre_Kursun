$(function () {
    console.log('linked');

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

            for ( var i = 0; i < totalMessages; i++)
            {
                let div = $("<div>", {
                });
                let category = $(`<p class='data'>` + (data.items[i].category) + `<strong><br> </strong></p>`).appendTo(div);
              //  let created_by = $(`<p class='data'>` + JSON.stringify(data.items[i]["created-by"]) + `<strong><br> </strong></p>`).appendTo(div);
                let name = $(`<p class='data'>` + (data.items[i]["name"]) + `</p>`).appendTo(div);
                let created_on = $(`<p class='data'>` + (data.items[i]["created-on"]) + `<strong><br> </strong></p>`).appendTo(div);
                let excerpt = $(`<p class='data'>` + (data.items[i]["excerpt"]) + `<strong><br> </strong></p>`).appendTo(div);
                let key_takeaways = $(`<p class='data'>` + (data.items[i]["key-takeaways"]) + `</p>`).appendTo(div);
                $('#container').append(div);

               
            }
            
           
        });


})