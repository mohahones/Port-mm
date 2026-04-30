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

let goLink = document.querySelector(".project1");
goLink.addEventListener("click", () => {
  window.open("https://mohahones.github.io/html-css-4/", "_blank");
});

let goLink1 = document.querySelector(".project2");
goLink1.addEventListener("click", () => {
  window.open("https://mohahones.github.io/Social-proof-section/", "_blank");
});

let goLink2 = document.querySelector(".more-project");
goLink2.addEventListener("click", () => {
  window.open("html/project.html", "_blank");
});

// let darkLight = document.querySelector(".dark-night");
// darkLight.addEventListener("click", () => {
//   darkLight.classList.toggle("active");
// });
