'use strict';

$('.sign').click(changeSign);

function changeSign() {
    if ($(this.children[0].children[1].children[0]).hasClass('d-none')) {
    	$(this.children[0].children[1].children[0]).removeClass('d-none');
        $(this.children[0].children[1].children[1]).addClass('d-none');
    } else {
    	$('.fa-plus').removeClass('d-none');
    	$('.fa-minus').addClass('d-none');

        $(this.children[0].children[1].children[0]).addClass('d-none');
        $(this.children[0].children[1].children[1]).removeClass('d-none');
    }
}
