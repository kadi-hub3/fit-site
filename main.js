
let slide1 = document.querySelector('.slide1')

let i = 0
let images = ["https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg", “https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/12/boxer-dog.jpg", “https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjKyvY3Wv2gyYBqDsbITfGFz5sSKNoLmuPxqIKkWDuAPuFFFH", “https://www.guidedogs.org/wp-content/uploads/2015/05/Dog-Im-Not.jpg"
]
const time = 2000


function changePic() {
    document.slide1.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout(changePic(), time)
}
window.onload = changePic