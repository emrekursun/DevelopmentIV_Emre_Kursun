$(function () {
    console.log('linked');

    fetch("json/entries.json").then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        
        console.log(data.items);
       
        let div = $("<div>", {
           
           

        });

        // Add data to html
       
            let entries = $(`<p class='data'>`+ JSON.stringify(data.items) + `<strong><br> </strong></p>`).appendTo(div);
            JSON.stringify(div);      
        $('#container').append(div);
        
    });

    
})