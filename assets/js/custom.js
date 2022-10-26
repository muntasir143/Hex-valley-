
/* Header sticky */
const headerSticky = document.getElementById('header');

window.addEventListener('scroll',function(){
	var winScrollTop = window.scrollY;

	if (window.scrollY >= 100) {
		headerSticky.classList.add('_header_sticky');
	}else {
		headerSticky.classList.remove('_header_sticky');
	}
});

/* Mobile menu */

const navi = document.getElementById('_navi');
const menu = document.getElementById('_menu');
const mobileMenu = document.getElementById('_mob_menu');

mobileMenu.addEventListener('click',function(){
	menu.classList.toggle('_show_mobile_menu');
	navi.classList.toggle('_mobile_navi');
});

/* Terms and privacy */

const termsContainer = document.getElementById('_terms_container');
const termsBox = document.getElementById('_terms_box');
const termsClose = document.getElementById('_terms_close_icon');
const termsOpen = document.getElementById('_terms_open');

const ppContainer = document.getElementById('_pp_container');
const ppBox = document.getElementById('_pp_box');
const ppClose = document.getElementById('_pp_close_icon');
const ppOpen = document.getElementById('_pp_open');

function tAp() {
	termsOpen.addEventListener('click',function(){
		termsContainer.style.opacity = 1;
		termsContainer.style.visibility = 'visible';
		termsBox.style.transform = 'translateY(0)';
	});

	ppOpen.addEventListener('click',function(){
		ppContainer.style.opacity = 1;
		ppContainer.style.visibility = 'visible';
		ppBox.style.transform = 'translateY(0)';
	});

	termsClose.addEventListener('click',function(){
		termsContainer.style.opacity = 0;
		termsContainer.style.visibility = 'hidden';
		termsBox.style.transform = 'translateY(-1000px)';
	});

	ppClose.addEventListener('click',function(){
		ppContainer.style.opacity = 0;
		ppContainer.style.visibility = 'hidden';
		ppBox.style.transform = 'translateY(-1000px)';
	});
}

tAp();

/* Modal contact form */

function modalContactForm(){
	const orderBtns = document.querySelectorAll('._order_btn');
	const modalForm = document.getElementById('_modal_form');
	const modalFormContact = document.getElementById('_modal_contact_form');
	const modalFormClose = document.getElementById('_modal_form_close_icon');

	orderBtns.forEach(function(oBtn){
		oBtn.addEventListener('click', function(){
			modalForm.style.opacity = 1;
			modalForm.style.visibility = 'visible';
			modalFormContact.style.transform = 'translateY(0)';
		});
	});

	modalFormClose.addEventListener('click', function(){
		modalForm.style.opacity = 0;
		modalForm.style.visibility = 'hidden';
		modalFormContact.style.transform = 'translateY(-1000px)';
	});


}

modalContactForm();

/* Scroll Top */
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll',function(){
	var winScrollTop = window.scrollY;

	if (window.scrollY >= 100) {
		scrollTop.classList.add('_scroll_top_active');
	}else {
		scrollTop.classList.remove('_scroll_top_active');
	}
});

scrollTop.addEventListener('click',topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}