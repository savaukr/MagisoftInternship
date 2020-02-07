/*let items = document.querySelectorAll('.slider-photo__item');
for (let i=0; i< items.length; i++){
	items[i].style.background = `url(${items[i].dataset.src})`;
}*/
let name_active = document.querySelector('.slider-photo__item_active').dataset.name;
document.querySelector('.slider-photo__name').innerHTML = name_active;