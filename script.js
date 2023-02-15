
var slideIndex = 1;
var slides = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");
var i;


showSlides(slideIndex);

function currentSlide(num) {
  showSlides(slideIndex = num);
}

function plusSlides(num) {
  showSlides(slideIndex += num);
}


function showSlides(num) {
  if (num > slides.length) {slideIndex = 1}    
  else if (num < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// types clase
window.addEventListener('scroll',()=>{
  let content =document.querySelector('.types');
  let contentPosition=content.getBoundingClientRect().top;
  let ScreenPosition=window.innerHeight;
  if(contentPosition<ScreenPosition)
  {
    content.classList.add('active');
  }else
  {
    content.classList.remove('active');
  }
});

//scroll boxes
const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes()
{
  const triggerbottom=window.innerHeight/5*4;
  boxes.forEach(box=>{
    const boxTop=box.getBoundingClientRect().top;
    if(boxTop<triggerbottom)
    {
      box.classList.add('show');
    }else
    {
      box.classList.remove('show');
    }
  });
}

//hide read more button
    let paragraph = document.getElementById("rent");
    document.getElementsByTagName('button')[0].textContent='READ MORE';

function hide() {
  var element = document.body;
    element.classList.toggle("hide");
    
    var button = document.getElementsByTagName('button')[0];
    if (paragraph.style.height == '0px'&& button.textContent == 'READ MORE') {
        paragraph.style.height = '105px';
        button.textContent='READ LESS';
      }
    else{
      paragraph.style.height = '0px';
      button.textContent='READ MORE';
    }
}

//btn.addEventListener('click' , function handelClick(){
//  btn.innerHTML = '<span> READ LESS <span>';
//});



