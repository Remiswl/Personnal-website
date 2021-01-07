'use strict';


$('.sign').click(changeSign);

function changeSign() {
    if ($(this.children[0].children[1].children[0]).hasClass('d-none')) {
    	$(this.children[0].children[1].children[0]).removeClass('d-none');
        $(this.children[0].children[1].children[1]).addClass('d-none');
    } else {
    	$('.fa-caret-down').removeClass('d-none');
    	$('.fa-rotate-180').addClass('d-none');

        $(this.children[0].children[1].children[0]).addClass('d-none');
        $(this.children[0].children[1].children[1]).removeClass('d-none');
    }
}


// Close navbar
$('.navbar-collapse a').click(() => {
    $('.navbar-collapse').collapse('hide');
});
