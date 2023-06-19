//
// Book a place page/ apartments-slider
//

const slider = document.querySelector('.slider')
const slider__arrow_left = slider.querySelector('.slider__arrow_left')
const slider__arrow_right = slider.querySelector('.slider__arrow_right')
const slider_list = slider.querySelector('.slider__list')
let position = 1
const total_items = 5

function slider_swap_right() {
    slider_list.style.translate = -position * 33.3333 + "%"
    position++
}

function slider_swap_left() {
    slider_list.style.translate = (2-position) * 33.3333 + "%"
    position--
}

function make_button_visible(button) {
    if (button.classList.contains('displayed-none')) {
        button.classList.remove('displayed-none');
        setTimeout(() => {
            button.classList.remove('opacity0')
            button.classList.add('opacity07');}, 0)
    }}

function make_button_invisible(button) {
    button.classList.remove('opacity07')
    button.classList.add('opacity0');
    setTimeout(() => {button.classList.add('displayed-none')}, 500);
}

slider__arrow_right.addEventListener('click', () => {
    if (position < total_items - 3) {
        slider_swap_right();
        make_button_visible(slider__arrow_left);
    } else if (position === total_items - 3){
        slider_swap_right();
        make_button_invisible(slider__arrow_right);
    }
});

slider__arrow_left.addEventListener('click', () => {
    if (position > 2) {
        slider_swap_left();
        make_button_visible(slider__arrow_right);
    } else if (position === 2){
        slider_swap_left();
        make_button_invisible(slider__arrow_left);
    }
});
