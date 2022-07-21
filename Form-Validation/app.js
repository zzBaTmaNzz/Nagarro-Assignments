$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passvalidation').hide();
    $('#conpassvalidation').hide();

    var Error = true;
    var emailErr = true;
    var passErr = true;
    var conpassErr = true;

    $('#username').keyup(function(){
        usernameValidation();
    });

    function usernameValidation(){
        var usernameval = $('#username').val();
        if(usernameval.length == ''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty.');
            $('#usernamevalidation').css('color', 'red');
            Error = false;
            return false;
        }else{
            $('#usernamevalidation').hide();
        }

        if(usernameval.length < 4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should contain atleast 4 characters');
            $('#usernamevalidation').css('color', 'blue');
            Error = false;
            return false;
        }else{
            $('#usernamevalidation').hide();
        }

    }

    $('#email').keyup(function(){
        emailValidation();
    });

    function emailValidation(){
        var emailval = $('#email').val();
        var emailRegExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if(emailval.length == ''){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email cannot be empty.');
            $('#emailvalidation').css('color', 'red');
            emailErr = false;
            return false;
        }
        else if(!emailRegExp.test(emailval)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Incorrect Format.');
            $('#emailvalidation').css('color', 'blue');
            emailErr = false;
            return false;
        }else{
            $('#emailvalidation').hide();
        }
    }

    $('#pass').keyup(function(){
        passValidation();
    });

    function passValidation(){
        var passval = $('#pass').val();
        var passRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])');

        if(passval.length == ''){
            $('#passvalidation').show();
            $('#passvalidation').html('Password cannot be empty.');
            $('#passvalidation').css('color', 'red');
            passErr = false;
            return false;
        }
        else if(!passRegExp.test(passval)){
            $('#passvalidation').show();
            $('#passvalidation').html('Incorrect Format.');
            $('#passvalidation').css('color', 'blue');
            passErr = false;
            return false;
        }
        else{
            $('#passvalidation').hide();
        }


        
    }

    $('#conpass').keyup(function(){
        conpassValidation();
    });

    function conpassValidation(){
        var conpassval = $('#conpass').val();
        var passval = $('#pass').val();
        if(conpassval != passval){
            $('#conpassvalidation').show();
            $('#conpassvalidation').html('Password did not match!');
            $('#conpassvalidation').css('color', 'red');
            conpassErr = false;
            return false;
        }else{
            $('#conpassvalidation').hide(); 
        }
    }

    $('#submitvalidation').click(function(){
        usernameValidation();
        emailValidation();
        passValidation();
        conpassValidation();

        if(Error == true && emailErr == true && passErr == true && conpassErr == true){
            return true;
        }else{
            return false;   
        }

    })


});