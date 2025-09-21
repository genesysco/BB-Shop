$(document).ready(function(){
	var popUp = $('#popUp');
	var pCloser = $('#pCloser');

	$('.hamburgerOpener').click(function(){
		myThis = $(this);
		openHamburgerMenu(myThis);
	});

	$('.firstMenu').click(function(){
		myThis = $(this);
		openSecondMenu(myThis);
	});

	$('#locationButton').click(showLoctions);

	$('.location').click(function() {
		city = $(this).text();
		selectLocation(city);
	})

	$('.heroImageButton').click(function(){
		imageSource = $(this).attr('data-source');
		number = $(this).attr('data-number');
		changeHeroSection($(this),imageSource,number);
	});

	
	let current = 1;
	const interval = setInterval(function() {
	    heroChanger(current);
	    current = current > 2 ? 1 : current + 1;
	}, 3000);



	$('.vendorButton').click(function(){
		vendor($(this));
	});

	$('#accountLogin').click(function(){
		$('.accountLogin').toggleClass('hidden');
	});

});



function closePopup() {
	popUp.classList.add("hidden");
}

function showPopup() {
	popUp.classList.remove("hidden");
}



function openHamburgerMenu(_this){
	parentMenu = _this.children('ul');
	parentMenu.toggleClass('hidden');
}



function openSecondMenu(_this){
	parentMenu = _this.children('ul');
	$('.secondMenu').removeClass('!block');
	parentMenu.toggleClass('!block');
}



function showLoctions(){
	$('#locations').toggleClass('hidden');
}



function selectLocation(city){
	$('#location').text(city);
	$('#locations').addClass('hidden');
}



function changeHeroSection(_this,imageSource,number){
	if($('.heroImage').attr('src') != imageSource)
	{
		$('.heroImageButton').removeClass('w-8').addClass('w-4');
		$('.heroImageButton').removeClass('bg-[var(--myBlue)]').addClass('bg-gray-800');
		$(_this).addClass('w-8').removeClass('w-4');
		$(_this).addClass('bg-[var(--myBlue)]').removeClass('bg-gray-800');
		$('.heroImage').addClass('opacity-0');

		setTimeout(function(){
			$('.heroImage').attr('src', imageSource);
		},300);
		setTimeout(function(){
			$('.heroImage').removeClass('opacity-0');
		},501);


		$('.ph1').addClass('translate-y-16');
		$('.ph1').addClass('opacity-0');
		$('.ph1').addClass('hidden');
		$('.ph1-' + number).removeClass('hidden');
		setTimeout(function(){
			$('.ph1-' + number).removeClass('translate-y-16');
			$('.ph1-' + number).removeClass('opacity-0');
		},500);


		$('h1').addClass('translate-y-20');
		$('h1').addClass('opacity-0');
		$('h1').addClass('hidden');
		$('.h1-' + number).removeClass('hidden');
		setTimeout(function(){
			$('.h1-' + number).removeClass('translate-y-20');
			$('.h1-' + number).removeClass('opacity-0');
		},500);


		$('#shopNowButton').addClass('translate-y-10');
		setTimeout(function(){
			$('#shopNowButton').removeClass('translate-y-10');
		},500);
	}
}



function heroChanger(num) {
    const element = $('[data-number="' + num + '"]');
    if (element.length) {
        element.trigger('click');
    }
}



function vendor(_this) {
	imagePath = _this.attr('data-img');
	iconPath = _this.attr('data-icon');
	$('#vendorImage').attr('src',imagePath);
	$('#vendorIcon').attr('src',iconPath);
	$('.vendorButton').removeClass('border-[var(--myBlue)]');
	_this.addClass('border-[var(--myBlue)]');
	_this.removeClass('border-gray-200');
	vendorsNames = $('.vendorButton').find('p');
	vendorsNames.removeClass('text-[var(--myBlue)]');
	myVendor = _this.find('p');
	myVendor.addClass('text-[var(--myBlue)]');
}