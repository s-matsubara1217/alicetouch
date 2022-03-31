const new_jobs = new Swiper('.oneday__container', {
	// デフォルトの設定
	slidesPerView: 3,
	spaceBetween: 48,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// responsive breakpoint
	breakpoints: {
		//画面幅835px以下の場合
		835: {
			slidesPerView: 1.25,
			spaceBetween: 24,
		}
	},

});