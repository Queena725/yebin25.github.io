document.querySelectorAll('.poem li').forEach((line) => {
   
    const y = Math.random() * window.innerHeight * 0.8;
    line.style.transform = `translate(${x}px, ${y}px)`;
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('.poem1 h2'); 

    h1.addEventListener('animationend', function () {
        h2.style.animation = 'colorChange 2s ease-in-out'; 
    });
});
