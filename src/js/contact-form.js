  $(document).ready(function() {		
  $('#buttonsend').click( function() {
	
		var name    = $('#name').val();
		var subject = $('#subject').val();
		var email   = $('#email').val();
		var message = $('#message').val();
		
		$('.loading').fadeIn('fast');
		
		if (name != "" && subject != "" && email != "" && message != "")
			{

				$.ajax(
					{
						url: './sendemail.php',
						type: 'POST',
						data: "name=" + name + "&subject=" + subject + "&email=" + email + "&message=" + message,
						success: function(result) 
						{
							$('.loading').fadeOut('fast');
							if(result == "email_error") {
								$('#email').css({"background":"#FFFCFC","border":"1px solid #ffb6b6","border-top":"1px solid #fbfbfb","border-left":"1px solid #fafafa"}).next('.require').text(' !');
							} else {
								$('#name, #subject, #email, #message').val("");
								$('<div class="success-contact">Your message has been sent successfully. Thank you! </div>').insertBefore('#contactFormArea');
								$('.success-contact').fadeOut(5000, function(){ $(this).remove(); });
							}
						}
					}
				);
				return false;
				
			} 
		else 
			{
				$('.loading').fadeOut('fast');
				if( name == "") $('#name').css({"background":"#FFFCFC","border":"1px solid #ffb6b6","border-top":"1px solid #fbfbfb","border-left":"1px solid #fafafa"});
				if(subject == "") $('#subject').css({"background":"#FFFCFC","border":"1px solid #ffb6b6","border-top":"1px solid #fbfbfb","border-left":"1px solid #fafafa"});
				if(email == "" ) $('#email').css({"background":"#FFFCFC","border":"1px solid #ffb6b6","border-top":"1px solid #fbfbfb","border-left":"1px solid #fafafa"});
				if(message == "") $('#message').css({"background":"#FFFCFC","border":"1px solid #ffb6b6","border-top":"1px solid #fbfbfb","border-left":"1px solid #fafafa"});
				return false;
			}
	});
	
		$('#name, #subject, #email,#message').focus(function(){
			$(this).css({"background":"#ffffff","border":"1px solid #d4d4d4","border-top":"1px solid #f1f1f1","border-left":"1px solid #eee"});
		});
      	
		});