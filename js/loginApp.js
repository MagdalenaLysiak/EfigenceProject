$(document).ready(function() {

    var button = $("#go");
    var avatar = $('.avatar');
    var alert = $('#alert');

    function sendAjax(password) {
        if(!password.length) {
            $('#alert').show().delay(2000).fadeOut(800);
            $('#alertTriangle').show().delay(2000).fadeOut(800);
        } else if(password.length<4){
            $('#alertTwo').show().delay(2000).fadeOut(800);
            $('#alertTriangle').show().delay(2000).fadeOut(800);
    } else {
        $.ajax({
            type: "post",
            data: {
                login: "efi",
                password: password,
            },
            url: "https://efigence-camp.herokuapp.com/api/login",
            error: function(response) {
                console.log(response.responseText);
            },
            success: function(response) {
                console.log(response);
            }
        });
        window.location.href = "file:///C:/Users/Madzia/Desktop/EfigenceProject/site.html";
    };
    };

    button.on('click', function(event) {
        event.preventDefault();
        var info = $('.pass').val();
        sendAjax(info);
    });

    avatar.on('click', function(event) {
        alert(avatar.css('background-image'));

    });

});