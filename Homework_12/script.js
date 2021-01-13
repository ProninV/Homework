const header =document.querySelector('.header')
const post = document.querySelector('.content')

header.onclick = function() {
    post.classList.toggle('content_active');
  };

