// 4 - ingresar uno de los 32 departamentos de colombia en un prompt y decir cual es su respectiva capital en un alert de respuesta

const btnCapital = document.getElementById('btnCapital');
const departamento = document.getElementById('department');

const capital = () => {
    let department = prompt("Ingrese un departamento de Colombia");

    if (department == "" || department == null) {
        alert("Ingrese un departamento de Colombia");
        return;
    } else {
        departamento.innerHTML = "Departamento: " + department;
    }

    switch (department) {
        case "bogota":
            alert("La capital es Bogotá");
            break;
        case "amazonas":
            alert("La capital es Leticia");
            break;
        case "antioquia":
            alert("La capital es Medellín");
            break;
        case "arauca":
            alert("La capital es Arauca");
            break;
        case "atlantico":
            alert("La capital es Barranquilla");
            break;
        case "bolivar":
            alert("La capital es Cartagena de Indias");
            break;
        case "boyaca":
            alert("La capital es tunja");
            break;
        case "caldas":
            alert("La capital es Manizales");
            break;
        case "caqueta":
            alert("La capital es Florencia");
            break;
        case "casanare":
            alert("La capital es Yopal");
            break;
        case "casanare":
            alert("La capital es Yopal");
            break;
        case "cauca":
            alert("La capital es Popayán");
            break;
        case "Cesar":
            alert("La capital es Valledupar");
            break;
        case "cordoba":
            alert("La capital es Monteria");
            break;
        case "cundinamarca":
            alert("La capital es Bogotá");
            break;
        case "choco":
            alert("La capital es Quibdo");
            break;
        case "guainia":
            alert("La capital es Inirida");
            break;
        case "guaviare":
            alert("La capital es San José del Guaviare");
            break;
        case "huila":
            alert("La capital es Neiva");
            break;
        case "guajira":
            alert("La capital es Riohacha");
            break;
        case "magdalena":
            alert("La capital es Santa Marta");
            break;
        case "meta":
            alert("La capital es Villavicencio");
            break;
        case "nariño":
            alert("La capital es Pasto");
            break;
        case "norte de santander":
            alert("La capital es Cúcuta");
            break;
        case "putumayo":
            alert("La capital es Mocoa");
            break;
        case "quindio":
            alert("La capital es Armenia");
            break;
        case "risaralda":
            alert("La capital es Pereira");
            break;
        case "santander":
            alert("La capital es Bucaramanga");
            break;
        case "san andres y providencia":
            alert("La capital es San Andrés");
            break;
        case "sucre":
            alert("La capital es Sincelejo");
            break;
        case "tolima":
            alert("La capital es Ibague");
            break;
        case "valle del cauca":
            alert("La capital es Cali");
            break;
        case "vaupes":
            alert("La capital es Mitu");
            break;
        case "vichada":
            alert("La capital es Puerto Carreño");
            break;
        default:
            alert("Ingrese un departamento valido");
            break;
    }
};

btnCapital.onclick = () => {
    capital();
};