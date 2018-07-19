window.addEventListener('scroll',function(x){
    if(window.scrollY > 0){
      topNavBarInner.classList.add('sticky')
    }else{
      topNavBarInner.classList.remove('sticky')
    }
})