$( document ).ready(function() {
   $('.menu-mobile').click( function(){
       $('.bar').toggleClass('menu-mobile-active');
   });

   $(document).on('click', function(e){
      console.log(e.target.className);
      if($(this).className !== 'menu-mobile'){
         $('.bar').removeClass('menu-mobile-active');
      }
   });
});