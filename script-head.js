  document.title = "Sabó Smart";

// Ocultar el enlace "Contacto" en el menú
document.querySelectorAll('a').forEach(el => {
    if (el.textContent.trim() === 'Contacto') {
        el.closest('li').style.display = 'none';
    }
});