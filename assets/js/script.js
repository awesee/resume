var zoom = 15;
var latitude = 41.038966;
var longitude = 28.984451;
 var scrollOffset=-30;

  $(window).bind("load", function() {

     $('body').scrollspy({ target: '.nav-menu' });

   
$('body').data()['bs.scrollspy'].options.offset = Math.abs(scrollOffset)+10; // Set the new offset 
$('body').data()['bs.scrollspy'].process(); // Force scrollspy to recalculate the offsets to your targets 
$('body').scrollspy('refresh'); // Refresh the scrollspy.


  });
$(document).ready(function() {
   

  
     setupSkills();
     checkContactForm();

function setupSkills(){
    if(true){
       var counter=1;
        $('.skill').each(function(){
            var el=$(this);
            var level=el.attr('data-level');
           
                el.append("<div class='bar-holder'><div class='progress-bar'></div></div>")
           
        
            el.find('.progress-bar').delay(counter*100).animate({width:level+'%'}, 1500,'easeOutBack')
            

            
            counter++;
        });
        
    }
}

 




function checkContactForm(){
   
        //  triggers contact form validation
        var formStatus=$(".contact-form").validate();
        //   ===================================================== 

        //sending contact form
        $(".contact-form").submit(function(e){
            e.preventDefault();
            if(formStatus.errorList.length===0)
            { 
                $(".contact-form .submit").fadeOut(function(){
                    $('#loading').css('visibility','visible');
                    $.post('submit.php',$(".contact-form").serialize(),
				
                        function(data){
                            $(".contact-form input,.contact-form textarea").not('.submit').val('');
                                
                            $('.message-box').html(data);
						
						
                            $('#loading').css('visibility','hidden');
                            $(".contact-form .submit").removeClass('disabled').css('display','block');
                        }
				
                        ); 
                });     
 
				
            }
			
        });	
			
        }
    
$('.nav-menu a').address($(this).attr('href'));

    $.address.change(function(event) {  
     
    var pageID=event.value.split('/')[1];
   if(pageID!=''){
    
     var el=$(".nav-menu [href=#"+pageID+"]");
     
      //  $('.nav-menu .active').removeClass('active');
     //   el.parent().addClass('active');
     $('select.nav option').each(function(){
        
         var val=$(this).val();
      
         if(val==="#"+pageID){
              $('select.nav option:selected').removeAttr('selected');
              $(this).attr('selected','selected');
         }
        
     });
    
    
     scrollToSection("#"+pageID);
   }    
}); 

 $('select.nav').change(function(){
      var loc=($(this).find('option:selected').val());
     
     scrollToSection(loc);
  })
  
  
function scrollToSection(destSection){
  
     
    $('html, body').stop().animate({
            scrollTop: $(destSection).offset().top - 30
        }, 1500,'easeInOutExpo');
 
}

 $('.nav-menu a').bind('click',function(event){
        var clickedMenu = $(this);
      //  $('.nav-menu .active').toggleClass('active');
//clickedMenu.parent().toggleClass('active');
  
        scrollToSection(clickedMenu.attr('href'));

        event.preventDefault();
    });

});


 $('.map').gmap3({
            map:{
                options:{
                    center:[latitude, longitude],
     
                    zoom:zoom,
                    mapTypeControl: true,
   
                    navigationControl: true,
                    scrollwheel: false,
                    streetViewControl: false
                }
            },
            marker:{
                latLng:[latitude, longitude]
            }
        });

// Sticky Nav
$(window).scroll(function(e) {
    var nav_anchor = $(".cv-title").offset().top;

    if ($(this).scrollTop() >= nav_anchor && $('.nav').css('position') != 'fixed') 
    {    
        $('.nav').css({
            'position': 'fixed',
            'top': '-1px'
        }).addClass('splited');

        $('.nav_anchor').css('height', '60px');
    } 
    else if ($(this).scrollTop() < nav_anchor && $('.nav').css('position') != 'relative') 
    {   

        $('.nav_anchor').css('height', '0px');

        $('.nav').css({
            'position': 'relative'
        }).removeClass('splited');;
    }
});