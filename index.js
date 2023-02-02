const toggles = Array.from(document.getElementsByClassName('menu-toggle'))

console.log(toggles)

toggles.forEach(e => e.addEventListener('click', () => {
    navElement.classList.toggle('toggled')
}))

const navElement = document.getElementsByClassName('nav')[0]

console.log(navElement)

const heroDataArray = [
    {desktop_imgUrl: './img/hero_1_desktop.png', mobile_imgUrl: './img/hero_1_mobile.png',title:'Discover innovative ways to decorate', text: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`}, 
    {desktop_imgUrl: './img/hero_2_desktop.png', mobile_imgUrl: './img/hero_2_mobile.png', title:'We are available all across the globe', text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`},
    {desktop_imgUrl: './img/hero_3_desktop.png', mobile_imgUrl: './img/hero_3_mobile.png', title:`Manufactured with the best materials`, text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`},
]

const next_btn = document.getElementById('next-btn')
const prev_btn = document.getElementById('prev-btn')


const hero_title = document.getElementById('hero-title')
const hero_text = document.getElementById('hero-text')
const hero_img_mobile = document.getElementById('hero-img-mobile')
const hero_img_desktop = document.getElementById('hero-img-desktop')


let index = 0


const getCurrentHeroObject = () =>{
    console.log(index)
    let currentObj = heroDataArray[index]
    hero_title.innerHTML=currentObj.title
    hero_text.innerHTML=currentObj.text
    hero_img_mobile.src=`${currentObj.mobile_imgUrl}`
    hero_img_desktop.srcset=`${currentObj.desktop_imgUrl}`
}

const prevImage = () => {
    if (index > 0){
        index -=1
    }
    else {
        index = heroDataArray.length-1
    }
    getCurrentHeroObject()

}


const nextImage = () => {
    console.log('Next button clicked')
    if (index!=heroDataArray.length-1){
        index +=1
    } else {
        console.log('Else option')
        index = 0;
    }
    getCurrentHeroObject()

}

next_btn.addEventListener('click', () => nextImage())
prev_btn.addEventListener('click', () => prevImage())


window.addEventListener("resize", function(){
    // fire when above 1203
    if (document.documentElement.clientWidth > 1203) {
      navElement.classList.remove('toggled')
    } 
})
