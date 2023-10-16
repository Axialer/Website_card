let current = 0;


function showSlide(n) {
  const slides = document.getElementsByClassName('magic');
  console.log(slides);
  slides[current].classList.remove('active');
  slides[n].classList.add('active');
  current = n;
  console.log(slides[n]);
}

document.addEventListener('keydown', function(event) {
  const slides = document.getElementsByClassName('magic');
  if (event.code == 'ArrowUp') {
    showSlide(current - 1 >= 0 ? current - 1 : slides.length - 1);
  }
  if (event.code == 'ArrowDown') {
    showSlide(current + 1 < slides.length ? current + 1 : 0);
  }
  if (event.code == 'Enter') {
    if(document.getElementById('project').classList.contains('active')){ 
      /*window.location.href='projects.html';*/
      
      $(Block_1).animate({marginLeft: "8%"}, 500);
      /*$(Block_2).show();*/
      $(Block_2).animate({opacity: 'show'}, 500);
      $(Block_3).animate({opacity: 'hide'}, 500);
      $(Block_4).animate({opacity: 'hide'}, 500);
      $(Block_5).animate({opacity: 'hide'}, 500);
      
      /*document.getElementById('Block_1').style.marginLeft='3%';*/
      }
    if(document.getElementById('content').classList.contains('active')){ 
      $(Block_1).animate({marginLeft: "8%"}, 500);

      $(Block_2).animate({opacity: 'hide'}, 500);
      $(Block_3).animate({opacity: 'show'}, 500);
      $(Block_4).animate({opacity: 'hide'}, 500);
      $(Block_5).animate({opacity: 'hide'}, 500);
      }
    if(document.getElementById('info').classList.contains('active')){ 
      $(Block_1).animate({marginLeft: "8%"}, 500);

      $(Block_2).animate({opacity: 'hide'}, 500);
      $(Block_3).animate({opacity: 'hide'}, 500);
      $(Block_4).animate({opacity: 'show'}, 500);
      $(Block_5).animate({opacity: 'hide'}, 500);
      }
    if(document.getElementById('options').classList.contains('active')){ 
      $(Block_1).animate({marginLeft: "8%"}, 500);

      $(Block_2).animate({opacity: 'hide'}, 500);
      $(Block_3).animate({opacity: 'hide'}, 500);
      $(Block_4).animate({opacity: 'hide'}, 500);
      $(Block_5).animate({opacity: 'show'}, 500);
    }
  
  }
  if (event.code == 'Escape') {
    /*window.location.href='index.html';*/
    $(Block_1).animate({marginLeft: "30%"}, 500);
    
    $(Block_2).animate({opacity: 'hide'}, 500);
    $(Block_3).animate({opacity: 'hide'}, 500);
    $(Block_4).animate({opacity: 'hide'}, 500);
    $(Block_5).animate({opacity: 'hide'}, 500);
  }
});