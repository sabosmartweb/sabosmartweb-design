
// icono header ayuda
(function () {
  const style = document.createElement("style");

  style.innerHTML = `
    a[href="#contact-modal"] {
      display: none !important;
    }

    a[href="#contact-modal"] {
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `;

  document.head.appendChild(style);
})();
