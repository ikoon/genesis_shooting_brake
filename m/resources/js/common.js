$(function(){
	// slider 1
	var useSlider = new Swiper('.visual-swiper', {
		spaceBetween: 0,
		effect: 'fade',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        pagination: {
            el: '.swiper-pagination',
			clickable: true,
        } 
	});
	// slider 2
	var signatureSlider = new Swiper('.signature-swiper', {
		spaceBetween: 0,
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	
	});
});

$(document).ready(function(){
	$(' .js-answer').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
;		$(this).parent().find('.btn-next img').attr('src', './resources/images/pop_btn_next_active.jpg');
	})

	// modal 열기
	$('.shareModal').modal('show'); 

    // $(' .a222').click(function(){
	// 	$("#answerModal").modal('close');
	// })
});