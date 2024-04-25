

// var cursor = document.querySelector("#cursor");

// document.addEventListener("mousemove", function (dets) {
//     cursor.style.left = dets.x - 7 + "px"
//     cursor.style.top = dets.y - 7 + "px"
// })

var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 20,
    direction: "horizontal",
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    direction: "vertical",
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});
