﻿ $(function(){




 	$('.top1 a.btn.btn-default')
 	.click(function(){
	$('body, html').animate({scrollTop: $('.top2').offset().top});
	return false;
 	})


 	$('.n1')
 	.click(function(){
	$('body, html').animate({scrollTop: 0});
	$('.menuphai').removeClass('ra');
	return false;
 	})

 	$('.n2')
 	.click(function(){
	$('body, html').animate({scrollTop: $('.top6').offset().top});
	$('.menuphai').removeClass('ra');
	return false;
 	})

 	$('.n3')
 	.click(function(){
	$('body, html').animate({scrollTop: $('.top3').offset().top});
	$('.menuphai').removeClass('ra');
	return false;
 	})

 	$('.n4')
 	.click(function(){
	$('body, html').animate({scrollTop: $('.top7').offset().top});
	$('.menuphai').removeClass('ra');
	return false;
 	})


	 $(window).resize(function(){

	 	var docao = $(window).height();
	 	$('.top1').css({'height':docao})

	 })


	 //khi click vao nut menu	
	 $('.nutmenu').click(function(){
	 	$('.menuphai').addClass('ra');
	 	return false;
	 })

	 $('.tat').click(function(){
	 	$('.menuphai').removeClass('ra');
	 	return false;
	 })
})  



 