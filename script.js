
// icono header ayuda
document.addEventListener("DOMContentLoaded", function() {
    // 1. Inyectamos la fuente de Google de forma limpia en el Head como un <link>
    if (!document.getElementById("google-icons-font")) {
        const fontLink = document.createElement("link");
        fontLink.id = "google-icons-font";
        fontLink.rel = "stylesheet";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined";
        document.head.appendChild(fontLink);
    }

    // 2. Inyectamos los estilos del ícono de ayuda
    const style = document.createElement("style");
    style.innerHTML = `
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
});