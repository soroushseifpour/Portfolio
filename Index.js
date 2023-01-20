const sections = document.querySelectorAll('section')
const slider = document.querySelector('.slider')
const arrowbtns = document.querySelectorAll('.arrow-btndown')
const arrowbtnup = document.querySelectorAll('.arrow-btnup')
const cardList = document.querySelector('.card-list')

const pageleft = document.querySelector('.page-left')
const pageright = document.querySelector('.page-rigth')

let index = 0
pageright.addEventListener('click', () => {
    if (index == 5)
        return;
    cardList.style.transform = `translate(-${(index + 1) * 16.6667}%,0)`
    index = index + 1
})
let left = 3;
pageleft.addEventListener('click', () => {
    if (index == 0)
        return;
    index = index - 1
    console.log(index)
    cardList.style.transform = `translate(-${index * 16.6667}%,0)`
})

let down = 0;
arrowbtns.forEach(arr => arr.addEventListener('click', () => {
    const value = arr.value;
    if (down == 4)
        return;
    down = down + 1;
    slider.style.transform = `translate(0, -${down}00vh)`
    handler()
}))
arrowbtnup.forEach(arr => arr.addEventListener('click', () => {
    const value = arr.value;
    slider.style.transform = `translate(0, -${down - 1}00vh)`
    down = down - 1
    handler()
}))

const morebtn = document.querySelector('.more-about')

morebtn.addEventListener('click', () => {
    down = down + 1;
    slider.style.transform = 'translate(0,-100vh)'
    handler()
})

const navbarItem = document.querySelectorAll('.navbar-list--item')
const handler = () => {
    navbarItem.forEach((item, i) => {
        if (i === down) {
            document.querySelector('.active').classList.remove('active')
            item.classList.add('active');
        }
    })
}
navbarItem.forEach((nI, i) => nI.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active')
    nI.classList.add('active')
    slider.style.transform = `translate(0,-${i * 100}vh)`;
    down=i
}))