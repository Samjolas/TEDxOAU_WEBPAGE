'use strict'

let teamPreview = document.querySelector('.team__preview-body');
let teamPreviewBox = document.querySelectorAll('.team__preview');

document.querySelectorAll('.team__group .team__body--item').forEach(team__item =>{
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

