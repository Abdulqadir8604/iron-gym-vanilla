const container = document.querySelector('.container');
const stickyColumn = document.querySelector('.q1');

container.addEventListener('scroll', () => {
  stickyColumn.style.top = `${container.scrollTop}px`;       
});

function startCounter(element, target) {
    let count = 0;
    let animation = setInterval(() => {
      count++;
      element.innerText = count;
      if (count == target) {
        clearInterval(animation);
      }
    }, 30);
  }
  
  let counterElement = document.querySelector(".count");
  startCounter(counterElement, 100);
  
