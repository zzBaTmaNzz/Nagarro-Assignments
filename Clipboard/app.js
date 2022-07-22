$(document).ready(function(){

    $('#msg').hide();

    $('#btn').click(function(){
        $('#text').select();
        document.execCommand('copy');
        
            $('#msg').show();
            $('#msg').html('Copied!');
            $('#msg').css('color', 'red');

            setTimeout(function() {
                $('#msg').hide();
            }, 5000);
    });
});