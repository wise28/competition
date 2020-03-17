$( document ).ready(function() {

    $('.navbar-toggler').click( function(){
        $('.bar').toggleClass('menu-mobile-active');

    });

    $(document).on('click', function(event){
        let target = event.target;


        if((!target.classList.contains('bar') && !$('.navbar-toggler').hasClass('collapsed')) && target.tagName != 'A'){
            $('.navbar-toggler').click();
            return;
        }
    });

});