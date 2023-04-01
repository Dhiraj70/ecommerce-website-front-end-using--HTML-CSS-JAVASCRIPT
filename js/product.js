let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                ratingStarInput[i].src = `img/star-1.png`
            } else {
                ratingStarInput[i].src = `img/no-staar.png`
            }
        }
    })
})