!function(){
let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(i=1;i<specialTags.length;i++){
      specialTags[i].classList.add('offset')
    }
  setTimeout(function(){
    siteWelcome.classList.remove('active')
  },100)
  findClosetAndRemoveOffset()
  window.addEventListener('scroll',function(x){
    findClosetAndRemoveOffset()
  })

function findClosetAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(i=1;i<specialTags.length;i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) 
      < Math.abs(specialTags[minIndex].offsetTop - window.scrollY) ){
        minIndex = i
      }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+  id  +'"]')
    let li = a.parentNode
    let brothers = li.parentNode.children
    for (i=0;i<brothers.length;i++){
      brothers[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
}.call()


window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'frank': '18'
    }
  })