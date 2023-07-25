// Function to handle the dynamic text animation
function animateText() {
    const texts = document.querySelectorAll(".Dynamic-txt");
    let currentTextIndex = 0;
  
    function animateTextItem() {
      if (currentTextIndex === texts.length) {
        // If all texts have been displayed, reset to the first text
        currentTextIndex = 0;
      }
  
      const currentText = texts[currentTextIndex];
      const textContent = currentText.textContent;
      let currentIndex = 0;
  
      function typeText() {
        if (currentIndex < textContent.length) {
          currentText.textContent = textContent.slice(0, currentIndex + 1);
          currentIndex++;
          setTimeout(typeText, 100); // Delay between typing each character
        } else {
          setTimeout(eraseText, 1500); // Delay before starting to erase
        }
      }
  
      function eraseText() {
        if (currentIndex >= 0) {
          currentText.textContent = textContent.slice(0, currentIndex);
          currentIndex--;
          setTimeout(eraseText, 50); // Delay between erasing each character
        } else {
          currentTextIndex++;
          setTimeout(animateTextItem, 500); // Delay before animating the next text
        }
      }
  
      typeText();
    }
  
    animateTextItem(); // Start the animation loop
  }
  
  // Wait for the document to load, then start the animation
  document.addEventListener("DOMContentLoaded", animateText);
  