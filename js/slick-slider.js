      $(document).on('ready', function() {
        $('.responsive').slick({
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: 'ease',


          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      });