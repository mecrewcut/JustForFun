let dotsItem = document.getElementsByClassName('dotsItem'),
    dotsBlock = document.getElementsByClassName('dotsBlock')[0],
    sliderItem = document.getElementsByClassName('sliderItem'),
    leftButton = document.getElementById('leftButton'),
    rightButton = document.getElementById('rightButton'),
    sliderIndex = 1
showItems(sliderIndex)
function showItems (n) {
    if (n < 1) {
        sliderIndex = sliderItem.length
    } else if (n > sliderItem.length) {
        sliderIndex = 1
    }
    for (let i = 0; i < sliderItem.length; i++){
        sliderItem[i].style.display = 'none'
    }
    for (let i = 0; i < dotsItem.length; i++) {
        dotsItem[i].classList.remove('active')
    }
    sliderItem[sliderIndex - 1].style.display = 'block'
    dotsItem[sliderIndex-1].classList.add('active')
}
function plusItem(n) {
    showItems(sliderIndex += n)
}
function currentItem(n) {
    showItems(sliderIndex = n)
}
leftButton.onclick = () => {
    plusItem(-1)
}
rightButton.onclick = () => {
    plusItem(1)
}
dotsBlock.onclick = (a) => {
    for (let i = 0; i < dotsItem.length + 1; i++) {
        if (a.target.classList.contains('dotsItem') && a.target === dotsItem[i - 1]) {
            currentItem(i)
        }
    }
}
