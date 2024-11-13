let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const updateCarousel = () => {
    const carousel = document.querySelector('.carousel');
    const offset = -currentIndex * 100;  // 每次移动一个项的宽度
    carousel.style.transform = `translateX(${offset}%)`;  // 更新位置
};

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;  // 循环播放
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;  // 循环播放
    updateCarousel();
});

// 初始化显示
updateCarousel();
