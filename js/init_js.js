jQuery(document).ready(function ($) {
	$('.ks-pwd-test').keydown(function(event){
		if(event.keyCode == 13) {
		  event.preventDefault();
		  return false;
		}
	  });
	$('#pass').focus(function(){
		$(this).css('color','#fff');
	});
	$('#pass').keyup(function(e) {
		 var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		 var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		 if (false == enoughRegex.test($(this).val())) {
		  $('#strength').removeClass();
				 $('#strength').addClass('weak');
				 $('#strength').html('Not Long Enough!!');
				 $('#pass').css('background','#ff0000');
		 } else if (strongRegex.test($(this).val())) {
				 $('#strength').removeClass();
				 $('#strength').addClass('strong');
				 $('#strength').html('Strong!');
				 $('#pass').css('background','#4da20f');
		 } else if (mediumRegex.test($(this).val())) {
		 $('#strength').removeClass();
				 $('#strength').addClass('medium');
				 $('#strength').html('Medium!');
				 $('#pass').css('background','#0000ff');
				 $('#pass').css('color','#fff');
		 } else {
		 $('#strength').removeClass();
				 $('#strength').addClass('weak');
				 $('#strength').html('Weak!');
				 $('#pass').css('background','#ff0000');
		 }
		 return true;
	});
	
	function GeneratePassword(lengthOfPassword) {
        var theLetters = "!@#$%^&*\(\)abcdefghijklmnopqrstuvwxyz";
        var StrongPasswordArray = [];
        var capitalise;
        for (var i = 0; i < lengthOfPassword; i++) {
            capitalise = Math.round(Math.random() * 1);
            if (capitalise === 0) {
                StrongPasswordArray[i] = theLetters.charAt(Math.round(Math.random() * 25)).toUpperCase();
            }
            else {
                StrongPasswordArray[i] = theLetters.charAt(Math.round(Math.random() * 25));
            }
        }
        var numberOfDigits;
        numberOfDigits = Math.round(Math.random() * (lengthOfPassword - 1)) + 1;
        var positionForNumeric, theNumber;
        for (i = 0; i < numberOfDigits; i++) {
            positionForNumeric = Math.round(Math.random() * (lengthOfPassword - 1));
            theNumber = Math.round(Math.random() * 9);
            StrongPasswordArray[positionForNumeric] = theNumber;
        }
        
        return StrongPasswordArray;
    }
	
	$('a#ks_generate').click(function(){
		var pass = GeneratePassword(12);
        $('#strongpass').html(pass);
	});
});