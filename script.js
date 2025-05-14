function Oblicz() {

const checkbox1 = document.getElementById("kurs1");
const checkbox2 = document.getElementById("kurs2");
const raty = document.getElementById("raty").value;
const miasto = document.getElementById("miasto").value;
let kwota = 0;
    if (checkbox1.checked) {
        kwota = kwota + 5000;
    }
    if (checkbox2.checked) {
        kwota = kwota + 3000;
    }

document.getElementById("wynik").innerText = "Kurs odbędzie się w " + miasto + ". Koszt całkowity: " + kwota + " zł. Płacisz " + raty + " rat po " + Math.floor(kwota / raty);
}
