// Push content down by navbar height when navbar is fixed to top
jQuery(window).on("resize", function () {
    $('body').css('padding-top', parseInt($('#navBar').css("height")) + 10);
    $('body').css('padding-bottom', parseInt($('#footer').css("height")) + 10);
});
jQuery(window).on("load", function () {
    $('body').css('padding-top', parseInt($('#navBar').css("height")) + 10);
    $('body').css('padding-bottom', parseInt($('footer').css("height")) + 10);
});

