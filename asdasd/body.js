import{createPost} from './script.js'
const specialRoot=document.querySelector('.wrapper')
createPost(specialRoot)
const createPost = (root) =>{
    const wrapper=document.createElement('div');
    wrapper.classList.add('header')
    wrapper.addEventListener('click', () => {
        content.classList.toggle('content')
        wrapper.classList.toggle('header')
    })
    const content=document.createElement('div');
    content.classList.add('content')
    const level=content.createElement('p')
    level.classList.add('level')
    level.textContent='Уровень 0/5'
    const lesson=content.createElement('p')
    lesson.classList.add('lesson')
    lesson.textContent='Урок 1 из 3'
    const info=content.createElement('button')
    info.classList.add('info')
    info.textContent='Теория'
    const go=content.createElement('button')
    go.classList.add('go')
    go.textContent='Старт'
    root.appendChild(wrapper)
}