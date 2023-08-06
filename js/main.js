$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});



function GEEKFORGEEKS(){
	var name =
		document.forms.RegForm.Name.value;
	var email =
		document.forms.RegForm.EMail.value;
	var phone =
		document.forms.RegForm.Telephone.value;
	var what =
		document.forms.RegForm.Subject.value;
	var address =
		document.forms.RegForm.Address.value;
	//Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	// Javascript reGex for Phone Number validation.
	var regPhone=/^\d{10}$/;					
	// Javascript reGex for Name validation
	var regName = /\d+$/g;						

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}

	if (address == "") {
		window.alert("Please enter your address.");
		address.focus();
		return false;
	}
	
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	
	if (password == "") {
		alert("Please enter your password");
		password.focus();
		return false;
	}

	if(password.length <6){
		alert("Password should be atleast 6 character long");
		password.focus();
		return false;

	}
	if (phone == "" || !regPhone.test(phone)) {
		alert("Please enter valid phone number.");
		phone.focus();
		return false;
	}

	if (what.selectedIndex == -1) {
		alert("Please enter your course.");
		what.focus();
		return false;
	}

	return true;
} {
	var name =
		document.forms.RegForm.Name.value;
	var email =
		document.forms.RegForm.EMail.value;
	var phone =
		document.forms.RegForm.Telephone.value;
	var what =
		document.forms.RegForm.Subject.value;
	var password =
		document.forms.RegForm.Password.value;
	var address =
		document.forms.RegForm.Address.value;
	//Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	// Javascript reGex for Phone Number validation.
	var regPhone=/^\d{10}$/;									
	// Javascript reGex for Name validation
	var regName = /\d+$/g;								
	

	if (name == "" || regName.test(name)) {
		window.alert("Please enter your name properly.");
		name.focus();
		return false;
	}

	
	if (email == "" || !regEmail.test(email)) {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}
	

	
	
	if (phone == "" || !regPhone.test(phone)) {
		alert("Please enter valid phone number.");
		phone.focus();
		return false;
	}

	

	return true;
}
