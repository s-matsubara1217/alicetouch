/*-------------------------------
	その他のコメント アコーディオン
-------------------------------*/
$('.contents__other__title').click(function () {
  $(this).next('.contents__other__list').slideToggle();
  $(this).toggleClass('js_arrow');
  if ($(this).parent().hasClass('js-acted')) {
    $(this).parent().removeClass('js-acted');
  }else{
    $(this).parent().addClass('js-acted');
  }
});
