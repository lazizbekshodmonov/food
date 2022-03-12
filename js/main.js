"use strict";

let  tapHeaders = document.querySelector('.tabheader__items'),
      tabHeader = document.querySelectorAll('.tabheader__item'),
     tabContent = document.querySelectorAll('.tabcontent'),
     animeImg = document.querySelectorAll('.img'),
     animeDescr = document.querySelectorAll('.tabcontent__descr');

     function removeClass() {
            tabContent.forEach(element => {
                  element.classList.add('hide');
                  element.classList.remove('show');
            });
            animeImg.forEach(element=>{
                  element.classList.remove('animeImg');
            });
            animeDescr.forEach(element =>{
                  element.classList.remove('animeDescr');
            });
            tabHeader.forEach(element =>{
                  element.classList.remove('tabheader__item_active');
            });
           
     }
     
     function addClass(i=0) {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
            tabHeader[i].classList.add('tabheader__item_active');
            animeImg[i].classList.add('animeImg');
            animeDescr[i].classList.add('animeDescr');
     }

     removeClass();
     addClass();

      tapHeaders.addEventListener('click', (e)=>{
      
            if(e.target && e.target.classList.contains('tabheader__item') ){
                  tabHeader.forEach((item, i) => {
                        if(e.target == item){
                              removeClass();
                              addClass(i);
                        }
                  });
            }
            
      });


