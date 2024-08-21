document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselElements = document.getElementsByClassName('carousel-element');
    const totalCarouselElements = carouselElements.length;
    let currentIndex = 0;

    document.getElementById('right-button').addEventListener('click', moveCarouselRight);
    document.getElementById('left-button').addEventListener('click', moveCarouselLeft);

    function moveCarouselRight() {
        if (currentIndex < totalCarouselElements - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function moveCarouselLeft() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCarouselElements - 1;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    document.addEventListener('keydown', (event) => {

        switch (event.key) {
            case 'ArrowLeft':
                moveCarouselLeft();
                break;
            case 'ArrowRight':
                moveCarouselRight();
                break;
            default:
        }
    });
});