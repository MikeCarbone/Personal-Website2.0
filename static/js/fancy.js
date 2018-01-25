var sideNav = document.getElementById('sideNav');
var burger = document.getElementById('burger');
var isMenuOpen = false;

function menuEnter(){
	sideNav.classList.remove('navSwingOut');
	sideNav.classList.add('navSwingIn');
	burger.classList.remove('burgerFlipSide');
	burger.classList.add('burgerFlipDown');
	
}

function menuLeave(){
	console.log('in menuLeave()');
	sideNav.classList.remove('navSwingIn');
	sideNav.classList.add('navSwingOut');
	burger.classList.remove('burgerFlipDown');
	burger.classList.add('burgerFlipSide');
	
}

function menuOpenClose(){
	if (isMenuOpen == false){
		menuEnter();
		isMenuOpen = true;
	}
	else{
		menuLeave();
		isMenuOpen = false;
	}
}