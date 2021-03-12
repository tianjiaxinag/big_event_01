$('.reglink').on('click', 'a', function () {
    $(this).hide().siblings('a').show();

    if ($(this).index() === 0) {
        $(this).parent('.reglink').siblings('.i1').stop().slideUp()
    } else {
        $(this).parent('.reglink').siblings('.i1').stop().slideDown()
    }
})