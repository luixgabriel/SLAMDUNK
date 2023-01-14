const sakuragi = document.getElementById('sakuragi')
const rukawa = document.getElementById('rukawa')
console.log(rukawa)

sakuragi.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description')
    description.classList.add('description-show')
    description.classList.add('animate__animated')
    description.classList.add('animate__fadeInDown')
    // description.setAttribute('class', 'description-show')
})

sakuragi.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description')
    description.setAttribute('class', 'description')
    
    
})

rukawa.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description-rukawa')
   
    // description.classList.add('description-show')
    // description.classList.add('animate__animated')
    // description.classList.add('animate__fadeInDown')
    description.setAttribute('class', 'description-show')
     description.classList.add('animate__animated')
     description.classList.add('animate__fadeInDown')
     
})

rukawa.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description-show')
    description.setAttribute('class', 'description-rukawa')
    
    
})




