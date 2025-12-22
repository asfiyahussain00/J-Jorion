  const slider = document.getElementById('announcementSlider');
    let sliderWidth = slider.offsetWidth;
    let parentWidth = slider.parentElement.offsetWidth;
    let position = parentWidth;

    function moveSlider() {
      position -= 1; // speed: px per frame
      if (position < -sliderWidth) {
        position = parentWidth; // reset
      }
      slider.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveSlider);
    }

    // Start animation
    moveSlider();

    // Optional: Recalculate widths on resize
    window.addEventListener('resize', () => {
      sliderWidth = slider.offsetWidth;
      parentWidth = slider.parentElement.offsetWidth;
      if (position > parentWidth) position = parentWidth;
    });