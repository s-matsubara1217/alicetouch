/*-------------------------------
	SPのみ画像順番入れ替え
-------------------------------*/
var mediaQueryList01 = window.matchMedia("(max-width:834px)");
var mediaQueryList02 = window.matchMedia("(min-width:835px)");

/* イベントリスナー */
var listener01 = function(event) {
  // リサイズ時に行う処理
	if (event.matches) {
		// 835px未満
    $('#js-destination01').after($('#js-target01'));
	}
};
var listener02 = function(event) {
  // リサイズ時に行う処理
	if (event.matches) {
		// 835px以上
    $('#js-benchMark01').after($('#js-target01'));
	}
};

/* リスナー登録 */
if (mediaQueryList01.addEventListener) {
	mediaQueryList01.addEventListener("change", listener01, false);
} else if (mediaQueryList01.attachEvent) {
	mediaQueryList01.attachEvent("change", listener01);
}

if (mediaQueryList02.addEventListener) {
	mediaQueryList02.addEventListener("change", listener02, false);
} else if (mediaQueryList02.attachEvent) {
	mediaQueryList02.attachEvent("change", listener02);
}

/* 初期化処理 */
listener01(mediaQueryList01);
listener02(mediaQueryList02);
