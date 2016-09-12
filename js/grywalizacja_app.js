$(document).ready(function() {
    
    //checkingbox
    var box = $('.frst-log');
    var checkImg = $('.checked');
    box.on('click', function() {
        if (checkImg.css('display') == 'none') {
            checkImg.show("slow");
        } else {
            checkImg.hide('slow');
        }
    });
    
    //selecting boxes
    var buttonShowAll = $('.allBox');
    var buttonSelect = $('.notfinished');
    var box = $('.challengeBox');
    var notFin = $('.notFin');
    var empty = $('.empty');
    
    //show not finished
    buttonSelect.on('click', function() {
        box.css('display', 'none');
        notFin.show();
        empty.show();
    });
    
    //show all
    buttonShowAll.on('click', function() {
        box.show();
    })
});