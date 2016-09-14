$(document).ready(function() {
    //checkingbox
    var box = $('.done');
    box.hover(function() {
        var boxContent = $(this).children().find('img').eq(0);
        if (boxContent.css('display') == 'none') {
            boxContent.show("slow");
        } else {
            boxContent.hide('slow');
        }
    });
    //selecting boxes
    var buttonShowAll = $('.allBox');
    var buttonSelect = $('.notfinished');
    var challengeBox = $('.challengeBox');
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
    });
    //show text in empty boxes
    empty.hover(function() {
        var emptyContent = $(this).children().find('p').eq(1);
        if (emptyContent.hasClass('hide') == false) {
            emptyContent.addClass('hide');
        } else {
            emptyContent.removeClass('hide');
        };
    });
    //show text in empty locked boxes
    var emptyLocked = $('.emptyLocked');
    emptyLocked.hover(function() {
        var emptyLockedContent = $(this).children().find('p').eq(
            1);
        if (emptyLockedContent.hasClass('hide') == false) {
            emptyLockedContent.addClass('hide');
        } else {
            emptyLockedContent.removeClass('hide');
        };
    });
    //show text in empty boxes in ribbon section
    var emptyRibbon = $('.empty_ribbon');
    emptyRibbon.hover(function() {
        var thisContent = $(this).children().find('p').eq(0);
        if (thisContent.hasClass('hide') == false) {
            thisContent.addClass('hide');
        } else {
            thisContent.removeClass('hide');
        };
    });
});