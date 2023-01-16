const sakuragi = document.getElementById('sakuragi')
const rukawa = document.getElementById('rukawa')
const akagi = document.getElementById('akagi')
const ryota = document.getElementById('ryota')
const mitsui = document.getElementById('mitsui')


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
    description.setAttribute('class', 'description-show')
     description.classList.add('animate__animated')
     description.classList.add('animate__fadeInDown')
     
})

rukawa.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description-show')
    description.setAttribute('class', 'description-rukawa')
    
    
})

akagi.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description-akagi')
     description.setAttribute('class', 'description-show')
     description.classList.add('animate__animated')
     description.classList.add('animate__fadeInDown')
     
})

akagi.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description-show')
    description.setAttribute('class', 'description-akagi')
    
    
})

ryota.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description-ryota')
    description.setAttribute('class', 'description-show')
     description.classList.add('animate__animated')
     description.classList.add('animate__fadeInDown')
     
})

ryota.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description-show')
    description.setAttribute('class', 'description-ryota')
    
    
})

mitsui.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description-mitsui')
    description.setAttribute('class', 'description-show')
     description.classList.add('animate__animated')
     description.classList.add('animate__fadeInDown')
     
})

mitsui.addEventListener('mouseout', ()=>{
    const description = document.querySelector('.description-show')
    description.setAttribute('class', 'description-mitsui')
    
    
})




