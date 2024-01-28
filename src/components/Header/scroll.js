export const scrollBar = (id)=>{
    const header = document.getElementById("header");
      let current = document.getElementById(id).getAttribute("id");
      const navLi = header.querySelectorAll(".anchor_nav li");
      navLi.forEach((li) => {
        li.classList.remove("current");
        if(li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`){
          li.classList.add("current");
        }
      });
}