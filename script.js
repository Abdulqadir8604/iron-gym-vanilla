
const container = document.querySelector('.container');
const stickyColumn = document.querySelector('.q1');

container.addEventListener('scroll', () => {
  stickyColumn.style.top = `${container.scrollTop}px`;       
});

function startCounter(element, start, target) {
    let count = start;
    let animation = setInterval(() => {
      count++;
      if (count > 999)
        element.innerText = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else
        element.innerText = count;
      if (count == target) {
        clearInterval(animation);
      }
    }, 30);
  }
  
  let happy_customers = document.querySelector(".happy_customers");
  let perfect_bodies = document.querySelector(".perfect_bodies");
  let working_hours = document.querySelector(".working_hours");
  let success_stories = document.querySelector(".success_stories");
  startCounter(happy_customers, 4200, 5000);
  startCounter(perfect_bodies, 3900, 4560);
  startCounter(working_hours, 100, 570);
  startCounter(success_stories, 452, 900);


  const gallery = document.querySelector(".gallery");
  let gallery_item;

  for (let i = 2; i <= 17; i++) {
    //create a gallery item div for each image element with the img src set to the current image
    gallery_item = document.createElement("div");
    gallery_item.classList.add("gallery-item");
    gallery_item.innerHTML = `<img src="gym_pics/${i}.jpg" alt="gym_pics/${i}.jpg" />`;
    gallery.appendChild(gallery_item);
  }
