//1-Guardar los siguientes datos del usuario
/**
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 * y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque*/

// Variables globales
const btnUser = document.getElementById('btnUser');
const userName = document.getElementById('name');
const userLastName = document.getElementById('lastName');
const userAge = document.getElementById('age');
const userPhone = document.getElementById('phone');
const userMobile = document.getElementById('mobile');
const userAddress = document.getElementById('address');

const registerUser = () => {
    let name = prompt('Cual es tu nombre? ');
    let lastName = prompt('Cual es tu apellido? ');
    let age = prompt('Cual es tu edad? ');
    let phone = prompt('Cual es tu telefono? ');
    let mobile = prompt('Cual es tu número de celular? ');
    let address = prompt('Cual es tu direccion? ');

    console.log(name, lastName, age, phone, mobile, address);

    if (name == "" || name == null || lastName == "" || lastName == null || age == "" || age == null || phone == "" || phone == null || mobile == "" || mobile == null || address == "" || address == null) {
        return alert("Error al momento de ingresar alguno de los datos");
    } else {
        userName.innerHTML = "Nombre: " + name;
        localStorage.setItem("name", name);
        userLastName.innerHTML = "Apellido: " + lastName;
        localStorage.setItem("lastName", lastName);
        userAge.innerHTML = "Edad: " + age;
        localStorage.setItem("age", age);
        userPhone.innerHTML = "Telefono: " + phone;
        localStorage.setItem("phone", phone);
        userMobile.innerHTML = "Celular: " + mobile;
        localStorage.setItem("mobile", mobile);
        userAddress.innerHTML = "Dirección: " + address;
        localStorage.setItem("address", address);
    }

    if (localStorage.getItem("name") && localStorage.getItem("lastName") && localStorage.getItem("age") && localStorage.getItem("phone") && localStorage.getItem("mobile") && localStorage.getItem("address")) {
        userName.innerHTML = "Nombre: " + localStorage.getItem("name");
        lastName.innerHTML = "Apellido: " + localStorage.getItem("lastName");
        age.innerHTML = "Edad: " + localStorage.getItem("lastName");
        phone.innerHTML = "Telefono: " + localStorage.getItem("age");
        mobile.innerHTML = "Celular: " + localStorage.getItem("phone");
        address.innerHTML = "Dirección: " + localStorage.getItem("address");
    }

};


const getUser = () => {
    if (localStorage.getItem("name") && localStorage.getItem("lastName") && localStorage.getItem("age") && localStorage.getItem("phone") && localStorage.getItem("mobile") && localStorage.getItem("address")) {
        userName.innerHTML = "Nombre: " + localStorage.getItem("name");
        lastName.innerHTML = "Apellido: " + localStorage.getItem("lastName");
        age.innerHTML = "Edad: " + localStorage.getItem("lastName");
        phone.innerHTML = "Telefono: " + localStorage.getItem("age");
        mobile.innerHTML = "Celular: " + localStorage.getItem("phone");
        address.innerHTML = "Dirección: " + localStorage.getItem("address");
    }
};

getUser();

// Evento
btnUser.onclick = () => {
    registerUser();
};