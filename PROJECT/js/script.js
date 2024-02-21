// Слайдер для блока Stages начало
let initialStageSlide = 0;
let activeDots = document.querySelectorAll('.stages__dot')
let stagesButtonDis = document.querySelectorAll('.stages__button')
const allStageSlides = Array.prototype.concat(
	document.querySelectorAll('.stages__first-slide'),
	document.querySelectorAll('.stages__second-slide'),
	document.querySelectorAll('.stages__third-slide'),
	document.querySelectorAll('.stages__fourth-slide'),
	document.querySelectorAll('.stages__fifth-slide')
);


function showStagesSlide(startIndex) {
	if (window.innerWidth < 840) {
			activeDots.forEach(dot => {
				dot.classList.remove('stages__dot_active');
		});
			
			allStageSlides.forEach((slide, index) => {
				slide.forEach(s => {
						s.style.display = 'none';
				});
				if (index === startIndex) {
						slide.forEach(element => {
								element.style.display = 'flex';
						});
						activeDots[startIndex].classList.add('stages__dot_active');
				}
		});


	} else {
			allStageSlides.forEach(slide => {
					slide.forEach(s => {
							s.style.display = 'flex'; 
					})
			});
	}
	stagesButtonDis.forEach( dis =>{
		dis.classList.remove('button-disabled')
	})
	if(startIndex === 0){
		stagesButtonDis[0].classList.add('button-disabled')
	}else if(startIndex === 4){
		stagesButtonDis[1].classList.add('button-disabled')
	}
}
showStagesSlide(initialStageSlide);


function nextStageSlide() {
	if (initialStageSlide + 1 < allStageSlides.length) {
			initialStageSlide += 1;
	} 
	showStagesSlide(initialStageSlide);
}

function previousStageSlide() {
	if (initialStageSlide - 1 >= 0) {
			initialStageSlide -= 1;
	} 
	showStagesSlide(initialStageSlide);
}



document.querySelector('.stages__previous').addEventListener('click', () => {
	previousStageSlide();
});

document.querySelector('.stages__next').addEventListener('click', () => {
	nextStageSlide();
});

window.addEventListener('resize', () => {
	showStagesSlide(initialStageSlide);
});

// Слайдер для блока Stages конец




// Слайдер для блока Participants начало
const slides = document.querySelectorAll('.participants__slide');
const actualPage = document.querySelectorAll('.participants__slide-number');
const totalSlides = slides.length;
let slidesPerPage = 3;
let currentPage = 0;
let initialSlide = 1;
let timer;

function responsiveSlider() {
    if (window.innerWidth > 838) {
        slidesPerPage = 3;
        initialSlide = 3;
    } else {
        slidesPerPage = 1;
        initialSlide = 1;
    }
}
responsiveSlider();

function showSlides(startIndex) {
    for (let i = 0; i < totalSlides; i++) {
        if (i >= startIndex && i < startIndex + slidesPerPage) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
    }
    actualPage[0].textContent = initialSlide + startIndex;
}

function nextSlide() {
    if (currentPage + slidesPerPage < totalSlides) {
        currentPage += 1;
    } else {
        currentPage = 0;
    }
    showSlides(currentPage);
    resetAutoSlide(); 
}

function prevSlide() {
    if (currentPage - 1 >= 0) {
        currentPage -= 1;
    } else {
        currentPage = totalSlides - slidesPerPage; 
    }
    showSlides(currentPage);
    resetAutoSlide(); 
}

function autoSlide() {
    timer = setInterval(() => {
        nextSlide();
    }, 4000);
}

function resetAutoSlide() {
    clearInterval(timer); 
    timer = setInterval(nextSlide, 4000); 
}

document.querySelector('.participants__previous').addEventListener('click', () => {
    prevSlide();
});

document.querySelector('.participants__next').addEventListener('click', () => {
    nextSlide();
});

autoSlide(); 

showSlides(currentPage);

window.addEventListener('resize', responsiveSlider);
window.addEventListener('load', responsiveSlider);
// Слайдер для блока Participants конец




// код для смены местами "Плата за игру" и "Стоимость входных билетов" начало
const changeTitleFirst = document.querySelectorAll('.support__title_change-first')
const changeTitleSecond = document.querySelectorAll('.support__title_change-second')

let firstContent = changeTitleFirst[0].textContent
let secondContent = changeTitleSecond[0].textContent

function updateContent() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 567) {
		changeTitleFirst[0].textContent = secondContent;
		changeTitleSecond[0].textContent = firstContent;
	} else{
		changeTitleFirst[0].textContent = firstContent
		changeTitleSecond[0].textContent = secondContent
	}
}

window.addEventListener('load', updateContent);
window.addEventListener('resize', updateContent);
// код для смены местами "Плата за игру" и "Стоимость входных билетов" конец






