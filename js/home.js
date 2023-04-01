// navbar 

// const navbar = document.querySelector('.navbar');
// 
// window.addEventListener('scroll', () => {
//     if(scrollY >= 180) {
//         navbar.classList.add('bg')
//     }
//     else{
//         navbar.classList.remove('bg')
//     }
// })

// image collage

const collageImg =[...document.querySelectorAll('.collage-img')];

collageImg.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImg.map((image, index) => {
            if(index != i) {
                  image.style.filter = `blur(10px)`;
                  item.style.zIndex = 2;
            }
        })
    })
    item.addEventListener('mouseleave', () => {
        collageImg.map((image, index) => {
            image.style = null;
        })
    })
})