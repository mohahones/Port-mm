function particles() {
  const pc = document.getElementById("particles");
  for (let i = 0; i < 22; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const dx = (Math.random() - 0.5) * 200 + "px";
    const dy = -(Math.random() * 200 + 80) + "px";
    p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;--dx:${dx};--dy:${dy};animation-delay:${Math.random() * 4}s;animation-duration:${3 + Math.random() * 3}s;opacity:${0.3 + Math.random() * 0.5}`;
    pc.appendChild(p);
  }

  function animCount(el, target, duration) {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      el.textContent = Math.round(prog * target);
      if (prog < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
}
particles();

let menuB = document.getElementById("mobile-menu");
let navLinks = document.querySelector(".nav-links");
menuB.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});
document.body.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
});

let btnC = document.querySelector(".btn-s");
btnC.addEventListener("click", download);
function download() {
  const link = document.createElement("a");
  link.href = "support/CV.pdf";
  link.download = "Mohammad_AlHunes_CV.pdf";
  link.click();
}

let typed = new Typed("#typing", {
  strings: [
    "am Frontend Developer",
    "am Building Modern Interfac",
    "Love Clean Code",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  startDelay: 500,
  loop: true,
});
const cards = document.querySelectorAll(".co");

cards.forEach((card) => {
  const desc = card.querySelector(".project-card-desc");
  let typingInterval;
  let typingTimeout;

  card.addEventListener("mouseenter", () => {
    const text = desc.dataset.text;
    let i = 0;

    typingTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        desc.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(typingInterval);
        }
      }, 25);
    }, 200);
  });

  card.addEventListener("mouseleave", () => {
    clearInterval(typingInterval);
    clearTimeout(typingTimeout);
    desc.textContent = "";
  });
});

let goLink2 = document.querySelector(".click");
goLink2.addEventListener("click", () => {
  window.open("html/project.html", "_blank");
});

//###############################################
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

console.log(pro);
