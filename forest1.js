document.addEventListener("DOMContentLoaded", () => {
  const fragments = document.querySelectorAll(".fragment");
  const dotNavigation = document.getElementById("dot");

  fragments.forEach((fragment, index) => {
    fragment.style.opacity = 0; 
    setTimeout(() => {
      fragment.style.transition = "opacity 1s ease";
      fragment.style.opacity = 1; 
    }, index * 500); 
  });


  const totalAnimationDuration = fragments.length * 500 + 1000; 
  setTimeout(() => {
    dotNavigation.style.display = "flex"; 
  }, totalAnimationDuration); 
});

const fragments = document.querySelectorAll('.fragment');

fragments.forEach((fragment, index) => {
  fragment.addEventListener('mouseenter', () => {
    const images = [
      'url("images/bg2.jpg")',
      'url("images/bg1.jpg")',
      'url("images/bg3.jpg")',
      'url("images/bg4.jpg")',
      'url("images/bg5.jpeg")',
      'url("images/bg5.png")'
    ];
    
    
    document.body.style.backgroundImage = images[index]; 
    document.body.style.backgroundSize = 'contain'; 
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundRepeat = 'no-repeat';
  });

  fragment.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = ''; 
  });
});



document.addEventListener("scroll", () => {
  const spacer = document.querySelector("spacer-paragraph");
  const rect = spacer.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    spacer.classList.add("visible");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let actions = document.querySelector(".actions");
  if (actions) {
      actions.style.opacity = "5";
      actions.style.transform = "translateY(0)";
  }
});

const h2Element = document.querySelector('h2');

function checkScroll() {
  
  const h2Position = h2Element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (h2Position < windowHeight * 0.8) { 
    h2Element.classList.add('visible');
  }
}


window.addEventListener('scroll', checkScroll);

checkScroll();
