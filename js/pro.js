let pro = document.querySelector(".project");
let api = new XMLHttpRequest();
api.open("GET", "https://api.github.com/users/mohahones/repos");
api.send();
console.log(api);

api.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let Jsonn = JSON.parse(this.responseText);
    console.log(Jsonn);
    Jsonn.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    for (let i = 0; i < Jsonn.length; i++) {
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      div1.className = `card project${i + 1}`;
      div2.classList.add("di-no");
      div3.classList.add("skils");
      div4.classList.add("co");
      h3.classList.add("project-card-h");
      p.classList.add("project-card-desc");

      const descriptionText =
        Jsonn[i].description || "No description available";
      p.setAttribute("data-text", descriptionText);
      h3.textContent = Jsonn[i].name;

      div4.appendChild(h3);
      div4.appendChild(p);
      div2.appendChild(div3);
      div1.appendChild(div2);
      div1.appendChild(div4);
      pro.appendChild(div1);

      div1.addEventListener("click", () => {
        if (Jsonn[i].homepage) window.open(Jsonn[i].homepage, "_blank");
      });

      let typingInterval;
      div1.addEventListener("mouseenter", () => {
        let text = p.getAttribute("data-text");
        let j = 0;
        p.textContent = "";
        typingInterval = setInterval(() => {
          if (j < text.length) {
            p.textContent += text[j];
            j++;
          } else {
            clearInterval(typingInterval);
          }
        }, 25);
      });

      div1.addEventListener("mouseleave", () => {
        clearInterval(typingInterval);
        p.textContent = "";
      });

      for (let j = 0; j < Jsonn[i].topics.length; j++) {
        let span = document.createElement("span");
        span.textContent = Jsonn[i].topics[j];
        span.classList.add("spannn");
        div3.appendChild(span);
      }
      console.log(Jsonn[i].topics);
    }
  }
};
