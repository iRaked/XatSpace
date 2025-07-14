(function(){

    $('.slider').slick({
        draggable: true,
        arrows: false,
        dots: false,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay:true
      });

      var audio = new Audio();
      var source = 'audio.mp3';
  
      audio.volume = 0.5;
      audio.autoplay = true;
      audio.src = source;
  
      $(".toggle-play").on('click', function(){
  
          if(audio.paused){
              audio.src = source;
              audio.play();
          }
          else{
              audio.pause();
              audio.src = '';
              $("#sound").text("play_arrow");
          }
      })
  
      $(audio).on('playing', function(){
          $("#sound").text("pause");
      })
  
      $(audio).on('pause', function(){
          $("#sound").text("play_arrow");
      })

})();
