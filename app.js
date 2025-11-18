// DOM elementlari
const elList = document.querySelector('.list');
const carsulBtn_left = document.getElementById('carusel-btn-left');
const carsulBtn_Right = document.getElementById('carusel-btn-right');
const Texts = document.querySelectorAll('#carusel-list-item');
const elVideoModal = document.getElementById('video-modal');
const elVideoModalText = document.getElementById('video-text-modal');
const modalWrapper = document.getElementById('modal-wrapper');
const modalCloseBtn = document.getElementById('modal-close-btn');

let textIndex = 0;

// Slider yangilash
function updateSlider() {
    Texts.forEach((text, index) => {
        text.style.fontWeight = index === textIndex ? 'bold' : 'normal';
        text.style.color = index === textIndex ? 'red' : 'black';
        text.style.fontSize = index === textIndex ? '24px' : '';
    });
    createItemTo__document();
}

// Slider tugmalari uchun event listenerlar
function setupSliderListeners() {
    carsulBtn_left.addEventListener('click', () => {
        textIndex = (textIndex - 1 + Texts.length) % Texts.length;
        updateSlider();
    });

    carsulBtn_Right.addEventListener('click', () => {
        textIndex = (textIndex + 1) % Texts.length;
        updateSlider();
    });
}

// Klaviaturada slider boshqarish
function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            textIndex = (textIndex - 1 + Texts.length) % Texts.length;
            updateSlider();
        } else if (e.key === 'ArrowRight') {
            textIndex = (textIndex + 1) % Texts.length;
            updateSlider();
        }
    });
}

// Kartochkalarni yaratish
function createItemTo__document() {
    const kategoriyalar = ["Html", "Css", "Bootstrap", "Tailwind", "Javascript", "React"];
    const tanlanganKategoriya = kategoriyalar[textIndex];
    const data = videos[tanlanganKategoriya] || [];

    elList.innerHTML = '';

    data.forEach((dars) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'list-item')
        listItem.innerHTML = `
       <img class='list-item-img'  src="${dars.link}" alt="${dars.title}">
       <div class='list-item-wrapper'>
         <p>${dars.title}</p>
         <button class="list-item-btn" 
                 data-video="${dars.videoUrl}" 
                 data-title="${dars.title}">
           Videoni ko'rish
         </button>
       </div>
     `;
        elList.appendChild(listItem);
    });

    // Yangi yaratilgan tugmalarga event listener qo'shish
    document.querySelectorAll('.list-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const videoUrl = btn.getAttribute('data-video');
            const videoTitle = btn.getAttribute('data-title');
            openModal(videoUrl, videoTitle);
        });
    });
}

// Modalni ochish
function openModal(videoUrl, title) {
    // YouTube URL manzilini to'g'rilash
    let embedUrl = videoUrl;

    // Agar oddiy YouTube link bo'lsa, embed formatiga o'tkazamiz
    if (videoUrl.includes('youtube.com/watch')) {
        const videoId = videoUrl.split('v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;

        elVideoModal.src = embedUrl;
        elVideoModalText.textContent = title;
        modalWrapper.style.display = 'flex';

        // Modal ochilganda body ga overflow: hidden qo'yamiz
        document.body.style.overflow = 'hidden';
    }
}
// Modalni yopish
function closeModal() {
    // YouTube videoni to'xtatish uchun src ni bo'shatamiz
    elVideoModal.src = '';
    modalWrapper.style.display = 'none';

    // Body overflow ni qaytarib qo'yamiz
    document.body.style.overflow = '';
}

// Modal yopish tugmasi
modalCloseBtn.addEventListener('click', closeModal);

// Modal tashqarisiga bosilganda yopish
modalWrapper.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
        closeModal();
    }
});


// Dasturni ishga tushirish
setupSliderListeners();
setupKeyboardControls();
updateSlider(); 
