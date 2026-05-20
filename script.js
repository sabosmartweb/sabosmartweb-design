// forma feed productos
  const style = document.createElement('style');
  style.innerHTML = `
    .products-feed__product-media {
      background: white !important;
      height: 250px !important;
      padding: 10px !important;
      border-radius: 8px !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }

    .products-feed__product-media img {
      max-height: 100% !important;
      max-width: 100% !important;
      object-fit: contain !important;
      width: auto !important;
      height: auto !important;
      display: block !important;
    }

    .products-feed__product-media a {
      width: 100% !important;
      height: 100% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
  `;
  document.head.appendChild(style);

// icono header ayuda
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