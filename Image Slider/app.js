const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slider').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    changeImage('next');
})
  
  next.addEventListener('click', () => {
    changeImage('prev');
})

function changeImage(direction){
    if(direction == 'next'){
        index++;
        if(index == totalImages){
            index = 0;
        }
    }else{
        if(index == 0){
            index = totalImages - 1;
        }else{
            index--;
        }
    }

    for(let i = 0; i<images.length; i++){
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}
  
