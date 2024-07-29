var design = document.querySelector('.designer-box');
console.log(design);

designerDesign = document.querySelector('.designer-design');
console.log(designerDesign);

designerDesign.addEventListener('mouseover',function(){
    design.style.display = 'flex';
    design.style.flexDirection = 'column';
});

designerDesign.addEventListener('mouseleave',function(){
    design.style.display = 'none';
});







let swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: true // Swiper will continue autoplay after user interactions
    },
    speed: 35000, // Duration of transition in milliseconds
    mousewheel: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 8,
        }
    }
});







// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: 8,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: true,
//     mousewheel: true,

//     breakpoints: {
//         320: {
//             slidesPerView: 3,
//         },
//         375: {
//             slidesPerView: 4,
//         },
//         425: {
//             slidesPerView: 4,
//         },
//         768: {
//             slidesPerView:4,
//         },
//         1024: {
//             slidesPerView:8,
//         }
        
//     }
// })

let uddhav = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    // loop: true,
    // autoplay: true,
    mousewheel: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:4,
        }
        
    }
})


