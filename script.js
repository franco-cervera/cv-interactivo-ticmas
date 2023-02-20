const image = document.getElementById("imagencv");
const telefono = document.getElementById("tel");
const mail = document.getElementById("email");
const locacion = document.getElementById("ubicacion");
const name = document.getElementById("nombre");
const boton = document.getElementById("reload").addEventListener("click", function () {
    fetchdata();
});

function fetchdata() {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results[0]);
            image.src = data.results[0].picture.large;
            telefono.innerHTML = "Cel: " + data.results[0].phone;
            mail.innerHTML = data.results[0].email;
            locacion.innerHTML = data.results[0].location.city + ", " + data.results[0].location.country;
            name.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
        });
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

fetchdata();
