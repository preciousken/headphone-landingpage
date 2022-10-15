// selecting the DOM
const phonegalleries = document.querySelectorAll('.phonegallery');
const phonegallerydisplay = document.querySelector('.phonegallerydisplay');
const changeColorBtns = document.querySelectorAll('.changeColorBtn');
// selecting the image
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
const label = document.querySelector('.label')

phonegalleries.forEach(gallery => {
    gallery.addEventListener('mouseover',(e)=>{
        // console.log(e.target.src)
        phonegallerydisplay.src=e.target.src

    })
});

changeColorBtns.forEach(changeColorBtn => {
    changeColorBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('b')){
            // console.log('container b')
            phonegallerydisplay.src = './iphone/black1.png'
            img1.src='./iphone/black1.png'
            img2.src='./iphone/black2.png'
            img3.src='./iphone/black3.png'
            img4.src='./iphone/black4.png'
            label.textContent ='Beats Studio3 Wireless Over-Ear Headphones -Black'
            
        }
        if(e.target.classList.contains('w')){
            // console.log('container w')
            phonegallerydisplay.src = './iphone/white1.png'
            img1.src='./iphone/white1.png'
            img2.src='./iphone/white2.png'
            img3.src='./iphone/white3.png'
            img4.src='./iphone/white4.png'
            label.textContent ='Beats Studio3 Wireless Over-Ear Headphones -White'

        }
        if(e.target.classList.contains('bl')){
            // console.log('container bl')
            phonegallerydisplay.src = './iphone/blue1.png'
            img1.src='./iphone/blue1.png'
            img2.src='./iphone/blue2.png'
            img3.src='./iphone/blue3.png'
            img4.src='./iphone/blue4.png'
            
            label.textContent ='Beats Studio3 Wireless Over-Ear Headphones -Blue'

        }
        if(e.target.classList.contains('g')){
            // console.log('container g')
            phonegallerydisplay.src = './iphone/gray1.png'
            img1.src='./iphone/gray1.png'
            img2.src='./iphone/gray2.png'
            img3.src='./iphone/gray3.png'
            img4.src='./iphone/gray4.png'
            
            label.textContent ='Beats Studio3 Wireless Over-Ear Headphones -Gray'

        }
    })
});