let bar = document.getElementById('hamburger');
let nav = document.getElementById('nav');
bar.addEventListener('click', function(){
    if(nav.style.display === 'block'){
        nav.style.display = 'none'
    }
    else{
        nav.style.display = 'block'
    }
});
// typed script 
let typed = new Typed('#element',{
    strings: ['Youtuber', 'Web Designer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
