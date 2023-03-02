const menuAmburgesa = document.getElementById("btn-burguer")

menuAmburgesa.addEventListener('click', cerMenu);

function verMenu(e) {
    e.preventDefault();
    menu.classList.toggle('active');
}