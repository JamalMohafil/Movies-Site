

  let el = document.querySelector(".scroller");
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  console.log(document.documentElement.scrollHeight);
  console.log(document.documentElement.clientHeight);
  console.log(height);
  
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
  });

  let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 150 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};