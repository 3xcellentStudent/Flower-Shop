$(document).ready(function() {
   /*Main Slider*/
      $('.intro_slider').slick({
          slidesToShow:1,
          slidesToScroll:1,
          dots:false
         //  responsive: [
         //      {
         //          breakpoint: 1229,
         //          settings: {
         //              slidesToShow:3,
         //              slidesToScroll:3,
         //          }
         //      },
         //      {
         //          breakpoint: 889,
         //          settings: {
         //              slidesToShow:2,
         //              slidesToScroll:2,
         //          }
         //      },
         //      {
         //          breakpoint: 599,
         //          settings: {
         //              slidesToShow:1,
         //              slidesToScroll:1,
         //          }
         //      }
         //  ]
      });
   /*Main Slider*/


   /*Collection Slider*/
      $('.collection_slider').slick({
         slidesToShow:3,
         slidesToScroll:3,
         dots:false,
          responsive: [
              {
                  breakpoint: 701,
                  settings: {
                  slidesToShow:2,
                  slidesToScroll:2,
                  }
              },
              {
                  breakpoint: 481,
                  settings: {
                      slidesToShow:1,
                      slidesToScroll:1,
                  }
              },
          ]
      });
   /*Collection Slider*/ 
   });