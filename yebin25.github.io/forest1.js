document.addEventListener("DOMContentLoaded", () => {
    const fragments = document.querySelectorAll(".fragment");
  
    fragments.forEach((fragment, index) => {
      fragment.style.opacity = 0; 
      setTimeout(() => {
        fragment.style.transition = "opacity 1s ease";
        fragment.style.opacity = 1; 
      }, index * 500); 
    });
  });

  document.addEventListener("scroll", () => {
    const spacer = document.querySelector("spacer-paragraph");
    const rect = spacer.getBoundingClientRect();
  
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      spacer.classList.add("visible");
    }
  });
  