const images = document.querySelectorAll('.image img')

images.forEach(function (img) {
    img.onclick = function () {
        document.querySelector('.popup').style.display = 'block'
        document.querySelector('.popup img').src = img.getAttribute('src')
        document.querySelector('body').style.overflow = 'hidden'
    }
})

document.querySelector('span').onclick = function() {
    document.querySelector('.popup').style.display = 'none'
    // document.querySelector('.popup img').src = ''
    document.querySelector('body').style.overflow = 'auto'
}

const sliderLine = document.querySelector('.slider__line')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

let offset = 0

const next = function () {
    offset += 400
    if (offset >= 2400) {
        offset = 0
        sliderLine.style.right = 0
    } else {
        sliderLine.style.right = offset + 'px'
    }
}

nextBtn.onclick = next

prevBtn.onclick = function () {
    offset -= 400
    if (offset < 0) {
        offset = 2000
        sliderLine.style.right = offset + 'px'
    } else {
        sliderLine.style.right = offset + 'px'
    }
}

setInterval(next, 10000)