!function(){
  //找弟弟
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
      x.currentTarget.classList.add('active')
      }
    liTags[i].onmouseleave = function(x){
      x.currentTarget.classList.remove('active')
      }
  } 
  let aTags = document.querySelectorAll('nav.menu > ul > li > a')
  function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate)
  for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(x){
      x.preventDefault()//阻止默认事件
      let a = x.currentTarget
      a.getAttribute('href')//不加协议的href
      let href = a.getAttribute('href')//#project
      let element = document.querySelector(href)
      let top = element.offsetTop //获取距顶部的高度
      let currentTop = window.scrollY
      let targetTop = top - 50
      //let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
     //window.scrollTo(0, top - 50)
      
      var s = targetTop - currentTop
      var t = Math.abs((s/100)*300)
      if(t>5000){t= 5000}
      var coords = {y: currentTop};
      var tween = new TWEEN.Tween(coords)
      .to ({y: targetTop}, t)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function(){
        window.scrollTo(0,coords.y)
      })
      .start();

    }
  }
}.call()