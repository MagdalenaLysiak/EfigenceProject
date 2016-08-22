$(document).ready(function() {
    
var search = $('.search');
var input = $('input');
    
    search.on('mouseenter', function(){
        input.show("slow");
    });
    
    input.on("mouseleave", function(){
        input.hide("slow");
    })

});
