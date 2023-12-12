
let heroImageCount = 1;

function countControlNext() {
    if (heroImageCount < 3) {
        heroImageCount++;
    } else {
        heroImageCount = 1;
    }
}
function countControlPre() {
    if (heroImageCount > 0) {
        heroImageCount--;
    } else {
        heroImageCount = 3;
    }
}

function imageControllerAnimation() {
    if (heroImageCount === 1) {
        document.querySelector('.image-1').classList.remove('selected');
        document.querySelector('.image-2').classList.remove('selected');
        document.querySelector('.image-3').classList.remove('selected');


        document.querySelector('.image-1').classList.add('selected');
    } else if (heroImageCount === 2) {
        document.querySelector('.image-1').classList.remove('selected');
        document.querySelector('.image-2').classList.remove('selected');
        document.querySelector('.image-3').classList.remove('selected');

        
        document.querySelector('.image-2').classList.add('selected');
    } else if (heroImageCount === 3) {
        document.querySelector('.image-1').classList.remove('selected');
        document.querySelector('.image-2').classList.remove('selected');
        document.querySelector('.image-3').classList.remove('selected');

        
        document.querySelector('.image-3').classList.add('selected');
    }
}

function heroImageChange() {
    if (heroImageCount === 1) {
        document.querySelector('.tucson').classList.remove('active');
        document.querySelector('.sportage').classList.remove('active');
        document.querySelector('.mustang').classList.remove('active');


        document.querySelector('.tucson').classList.add('active');
        document.querySelector('.overlay-car-name').innerHTML = 'TUCSON';
        document.querySelector('.hero-brand').innerHTML = 'HYUNDAI';
        document.querySelector('.hero-car').innerHTML = 'TUCSON';
        document.querySelector('.car-description').innerHTML = 'Hyundai Tucson is a popular compact crossover SUV manufactured by the South Korean automobile manufacturer Hyundai.';




    } else if (heroImageCount === 2) {
        document.querySelector('.tucson').classList.remove('active');
        document.querySelector('.sportage').classList.remove('active');
        document.querySelector('.mustang').classList.remove('active');

        
        document.querySelector('.sportage').classList.add('active');
        document.querySelector('.overlay-car-name').innerHTML = 'SPORTAGE';
        document.querySelector('.hero-brand').innerHTML = 'KIA';
        document.querySelector('.hero-car').innerHTML = 'SPORTAGE';
        document.querySelector('.car-description').innerHTML = catalogData.kia[2].description;




    } else if (heroImageCount === 3) {
        document.querySelector('.tucson').classList.remove('active');
        document.querySelector('.sportage').classList.remove('active');
        document.querySelector('.mustang').classList.remove('active');

        
        document.querySelector('.mustang').classList.add('active');
        document.querySelector('.overlay-car-name').innerHTML = 'MUSTANG';
        document.querySelector('.hero-brand').innerHTML = 'FORD GT';
        document.querySelector('.hero-car').innerHTML = 'MUSTANG';
        document.querySelector('.car-description').innerHTML = catalogData.ford[0].description;
    }
}

document.querySelector('.right').addEventListener('click', () => {
    countControlNext();
    imageControllerAnimation();
    heroImageChange();

});
document.querySelector('.left').addEventListener('click', () => {
    countControlPre();
    imageControllerAnimation();
    heroImageChange();
});




for(let i = 0; i < 4; i++) {
    document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
    <img class="catalog-image" src="${catalogData.hyundai[i].path}" alt="">
    <h1 class="car-name">${catalogData.hyundai[i].name}</h1>
    <p class="light">${catalogData.hyundai[i].description}</p>
    <h1 class="price-container"><span class="price">${catalogData.hyundai[i].price}</span>/day</h1>

    <div class="btns-container">
        <button class="booking-btn">Booking</button>
        <button class="details-btn"><p>i</p></button>
    </div>
</div>`
}


function deleteSelected() {
        document.querySelector('.hyundai').classList.remove('selected');
        document.querySelector('.kia').classList.remove('selected');
        document.querySelector('.honda').classList.remove('selected');
        document.querySelector('.ford').classList.remove('selected');
        document.querySelector('.chevrolet').classList.remove('selected');
        document.querySelector('.toyota').classList.remove('selected');
}
function select(brand) {
    document.querySelector(`.${brand}`).classList.add('selected');
}


document.querySelector('.hyundai').addEventListener('click', () => {
    deleteSelected();
    select('hyundai');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.hyundai[i].path}" alt="">
        <h1 class="car-name">${catalogData.hyundai[i].name}</h1>
        <p class="light">${catalogData.hyundai[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.hyundai[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});

document.querySelector('.kia').addEventListener('click', () => {
    deleteSelected();
    select('kia');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.kia[i].path}" alt="">
        <h1 class="car-name">${catalogData.kia[i].name}</h1>
        <p class="light">${catalogData.kia[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.kia[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});

document.querySelector('.honda').addEventListener('click', () => {
    deleteSelected();
    select('honda');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.honda[i].path}" alt="">
        <h1 class="car-name">${catalogData.honda[i].name}</h1>
        <p class="light">${catalogData.honda[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.honda[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});

document.querySelector('.ford').addEventListener('click', () => {
    deleteSelected();
    select('ford');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.ford[i].path}" alt="">
        <h1 class="car-name">${catalogData.ford[i].name}</h1>
        <p class="light">${catalogData.ford[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.ford[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});

document.querySelector('.chevrolet').addEventListener('click', () => {
    deleteSelected();
    select('chevrolet');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.chevrolet[i].path}" alt="">
        <h1 class="car-name">${catalogData.chevrolet[i].name}</h1>
        <p class="light">${catalogData.chevrolet[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.chevrolet[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});

document.querySelector('.toyota').addEventListener('click', () => {
    deleteSelected();
    select('toyota');

    document.querySelector('.catalog-container').innerHTML = '';

    for(let i = 0; i < 4; i++) {
        document.querySelector('.catalog-container').innerHTML += `<div class="catalog">
        <img class="catalog-image" src="${catalogData.toyota[i].path}" alt="">
        <h1 class="car-name">${catalogData.toyota[i].name}</h1>
        <p class="light">${catalogData.toyota[i].description}</p>
        <h1 class="price-container"><span class="price">${catalogData.toyota[i].price}</span>/day</h1>
    
        <div class="btns-container">
            <button class="booking-btn">Booking</button>
            <button class="details-btn"><p>i</p></button>
        </div>
    </div>`
    }
});



function activeFaq(faqName) {
        document.querySelector('.faq1').classList.remove('active');
        document.querySelector('.faq2').classList.remove('active');
        document.querySelector('.faq3').classList.remove('active');

        document.querySelector(`.${faqName}`).classList.add('active');    
}

setInterval( () => {
    document.querySelector('.loading-overlay').setAttribute('style', 'opacit: 0;');
}, 2700);
setInterval( () => {
    document.querySelector('.loading-overlay').classList.remove('active');
}, 3000);