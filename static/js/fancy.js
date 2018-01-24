var sideNav = document.getElementById('sideNav');
var isMenuOpen = false;

function menuEnter(){
	sideNav.style.display = 'block';
	sideNav.classList = '';
	sideNav.classList.add('navSwingIn');
}

function menuLeave(){
	sideNav.classList = '';
	sideNav.classList.add('navSwingOut');
	sideNav.style.display = 'none';
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