$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > $('#services').offset().top - 400){
            $('#services .col-md-4').addClass('animate__animated animate__fadeInUp');
        }
    });
});
