
$(function(){

	// nav.menu
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active');
		// $('nav').animate({left:0}, 500);
		// 1.用class來做
		// 2.用animate來做
	})

	// something.html
  	$('.sel h1').click(function(){
    // JQ 原始選取器,速度較快
    $(this).parent().siblings().children('div').animate({maxHeight: 0}, 500);

    //CSS 類別選取器,速度較慢
    // $('ul div').animate({maxHeight: 0}, 'slow');
    $(this).next().animate({maxHeight: '500px'}, 1000);
  })

  // index.html

  $(window).scroll(function(){
  	var w = $(window).scrollTop();
  	var area2 = $('.area2').offset().top-700;

  	var area5 = $('.area5').offset().top-600;
  	var about = $('.about').offset().top-600;

  	var project = $('.project').offset().top-600;
  	console.log('area2'+':'+area2);
  	console.log(w);
  	if(w>area2){
  		$('.area2').animate({opacity:1},1000);
      $('.toTop').animate({opacity:1},500);
  	}

  	if(w>area5){
  		$('.area5').animate({opacity:1},1000);
  	}

  	if(w>about){
  		$('.about').animate({opacity:1},1000);
  	}

  	if(w>project){
  		$('.project').animate({opacity:1},1000);
  	}


    if(w == 0){
      // $('.area2').stop(true,false).removeAttr('style');
      // $('.area5').stop(true,false).removeAttr('style');
      // $('.about').stop(true,false).removeAttr('style');
      // $('.project').stop(true,false).removeAttr('style');

      $('.toTop,.area2,.area5,.about,.project').stop(true,false).removeAttr('style');
    }
  })


  $('.toTop').click(function(){

    $('html').animate({scrollTop:0}, 1000);
  })
})







