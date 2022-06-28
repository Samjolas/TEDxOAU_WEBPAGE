
// TEDxOAU TEXT ANIMATION //

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["TEDxOAU"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
    document.querySelector("#word").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 500);
    }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
    typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
      StartTextAnimation(i + 1);
    });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


// POPUP EFFECT //

'use strict'

let teamPreview = document.querySelector('.preview');
let teamPreviewBox = document.querySelectorAll('.preview__body');

document.querySelectorAll('.team__group .team__item').forEach(team__item =>{
    team__item.addEventListener('click', function(){
        teamPreview.style.display = 'flex'
        let name = team__item.getAttribute('data-name');
        teamPreviewBox.forEach(team__preview =>{
            let target = team__preview.getAttribute('data-target');
            if(name == target){
                team__preview.classList.add('active');
            }else{
                team__preview.classList.remove('active')
            }
            
        })
    });
});

teamPreviewBox.forEach(closeModal => {
    closeModal.querySelector('.btn-close').onclick = () =>{
        closeModal.classList.remove('active');
        teamPreview.style.display = 'none'
    }
});



// MOVE TO NEXT //

let Next = document.querySelector('#next');
let Blog = document.querySelectorAll('.blog__wrapper')
console.log (Blog)

Next.addEventListener('click', function() {
  removeBlog()
  currentActive = Math.floor(Math.random()*4)
  num = Blog[currentActive]
  num.classList.remove('de-active')
})

function removeBlog() {
  Blog.forEach(x => {
    x.classList.add('de-active')
  })
}

