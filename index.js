const sakuragi = document.getElementById('sakuragi')

sakuragi.addEventListener('mouseenter', ()=>{
    const description = document.querySelector('.description')
    description.classList.add('description-show')
    description.classList.add('animate__animated')
    description.classList.add('animate__fadeInDown')
    // description.setAttribute('class', 'description-show')
})



