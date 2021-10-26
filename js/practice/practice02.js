// 2 - Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo.Imprimir cada variable en una línea distinta en pantalla.

const btnEmployee = document.getElementById("btnEmployee");
const employeeName = document.getElementById("employee");
const emploSalary = document.getElementById("salary");

const employeeData = () => {
    let nameEmplo = prompt("Cual es tu nombre?");
    let salaryEmplo = prompt("De cuanto es su sueldo?");
    if (
        nameEmplo == "" ||
        nameEmplo == null ||
        salaryEmplo == "" ||
        salaryEmplo == null
    ) {
        alert("Error registrando los datos");
    } else {
        employeeName.innerHTML = "Empleado: " + nameEmplo;
        localStorage.setItem("empName", nameEmplo);

        emploSalary.innerHTML = "Sueldo: " + salaryEmplo;
        localStorage.setItem("empSalary", salaryEmplo);
    }
};

const getEmploy = () => {
    if (localStorage.getItem("empName") && localStorage.getItem("empSalary")) {
        employeeName.innerHTML = "Empleado: " + localStorage.getItem("empName");
        emploSalary.innerHTML = "Empleado: " + localStorage.getItem("empSalary");
    }
};

getEmploy();

btnEmployee.onclick = () => {
    employeeData();
};