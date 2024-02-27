export const scrollNav = () => {
  const header = document.getElementById("header");
  const sections = document.querySelectorAll(".portfolio_section");
  const navLi = header.querySelectorAll(".anchor_nav li");

  let current = "";

  sections.forEach((section)=>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};
