$(document).ready(function() {
    
var search = $('.search');
var input = $('.searchInput');
    
    search.on('mouseenter', function(){
        input.show("slow");
    });
    
    input.on("mouseleave", function(){
        input.hide("slow");
    })

  function getData(endpoint, callback) {
        $.ajax({
              type: 'GET',
              url: "https://efigence-camp.herokuapp.com/api/"+endpoint,
              dataType: 'json'
        }).done(function(answer){
            
            callback(answer);
             
    	 }).fail(function(error) {
           console.log("Błąd!")
       })  
}

    getData( "data/summary" , function(data) {
        $('.balanceNo').prepend("<b>" + data.content[0].balance + " " + "</b>");
        $('.fundsNo').prepend("<b>" + data.content[0].funds  + " " + "</b>");   
        $('.paymentsNo').prepend("<b>" + data.content[0].payments  + " " + "</b>");      
        
        
    });

          

    
});
