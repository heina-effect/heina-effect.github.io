var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
    observer: true,
    observeParents: true,
    // observer: true, observeParents: true로 해당 요소와 부모 요소를 감지하여 DOM에 변화가 있으면 swiper를 초기화하여 문제를 해결할 수 있다.
  });


const tabTitle = document.querySelectorAll(".category>h2");
const tabContent = document.querySelectorAll(".contents");

tabTitle.forEach((item) => {
  item.addEventListener("click", tabHandler);
  
})

function tabHandler(item) {
  const tabTaget = item.currentTarget
  const target = tabTaget.dataset.tab;
  
  tabTitle.forEach((title) => {
    title.classList.remove("active");
  });
  tabContent.forEach((target) => {
    target.classList.remove("target");
  })

  document.querySelector("#" + target).classList.add("target");
  tabTaget.classList.add("active");

}

const hoverEvent =  document.querySelectorAll("#tab3 figure");
const layer = document.querySelector(".layer");


  hoverEvent.forEach((event) => {

    event.addEventListener("mouseenter", () => {
      // layer.style.display = "block";
      document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    })  
    event.addEventListener("mouseleave", () => {
      // layer.style.display = "none";
      document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.0)"
    })  


  })
