$(document).ready(function(){
    // $('.clicks').on('click', function(){
    //     $('#box').addClass('show');
    // })

    $('.clicks').on('click', function(){
        $('#box').toggleClass('show');
    })

    $('.close').on('click', function(){
        $('#box').removeClass('show');
    })

    $('.submission').on('click', function(){
        $('#box').removeClass('show');
    })


});