  document.title = "Sabó Smart";

  (function () {
  const style = document.createElement("style");

  style.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined");

    a[href="#contact-modal"] {
      font-size: 0 !important;
      width: 38px !important;
      height: 38px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    a[href="#contact-modal"]::before {
      content: "help";
      font-family: "Material Symbols Outlined";
      font-size: 28px !important;
      line-height: 1;
    }
  `;

  document.head.appendChild(style);
})();