const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchResult.textContent = `Você buscou por: "${query}"`;
  } else {
    searchResult.textContent = "";
  }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});