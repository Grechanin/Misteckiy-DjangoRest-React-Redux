function carouselResize () { var e = $(window).height(); var t = $('.header').height(); var n = $('.navbar').height(); var s = parseInt($('.navbar').css('padding-top')); var o = t + n; $('.carosel-image-resize').css('max-height', e - o - 2 * s) }$(document).ready(function () { carouselResize(), $(window).resize(function () { carouselResize() }), $('.show-more a').on('click', function (e) { var t = $(this); var n = t.parent().prev('div.content'); var s = t.text().toUpperCase(); s === 'ДЕТАЛЬНІШЕ' ? (n.switchClass('hideContent', 'showContent', 400), t.addClass('opened', 400), s = 'Згорнути') : (n.switchClass('showContent', 'hideContent', 400), t.removeClass('opened', 400), s = 'Детальніше'), t.text(s), e.preventDefault() }) })