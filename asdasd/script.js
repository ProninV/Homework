const createPost = (root,
    title='Click here',
    conent='lOrem'
    )=>{
    const wrapper=document.createElement('div');
    wrapper.classList.add('post')
    const heading = document.createElement('h2')
    heading.classList.add('heading')
    wrapper.classList.add('post_large')
    heading.addEventListener('click',() => {
        paragraph.classList.toggle('collapse')
        wrapper.classList.toggle('post_large')
    })
    const paragraph =document.createElement('p')
    paragraph.classList.add('paragraph')
    heading.textcontent=title
    paragraph.textContent=content
    wrapper.appendChild(heading)
    wrapper.appendChild(paragraph)
    root.appendChild(wrapper)
}
export{
    createPost
}