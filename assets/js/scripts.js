// Funciòn copiar link de post
function copyToClipboard(url, event) {
    // Prevenir comportamiento por defecto
    event.preventDefault();
    
    // Crear un elemento de texto temporal
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = url;
    document.body.appendChild(tempInput);
    
    // Seleccionar el texto y copiarlo
    tempInput.select();
    document.execCommand("copy");
    
    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de que el enlace ha sido copiado
    var copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";

    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 6000);
}

// Desplegar y ocultar menú hamburguesa
const headerNav = document.querySelector('#header__nav');
const headerOpen = document.querySelector('#header__open');
const headerClose = document.querySelector('#header__close');
const headerLinks = document.querySelectorAll('.header__links a');

/** Desplegar y ocultar menu hamburguesa **/
headerOpen.addEventListener("click", () => {
    headerNav.classList.add("visible");
})

headerClose.addEventListener("click", () => {
    headerNav.classList.remove("visible");
})

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerNav.classList.remove("visible");
    });
});

// Tabs
const tabs = document.querySelectorAll(".roadmap__tab");
const contents = document.querySelectorAll(".roadmap__content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        contents[index].classList.add("active");
    });
});





