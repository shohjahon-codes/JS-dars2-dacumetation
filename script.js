function ayirishniHisobla() {

    var a = document.getElementById("sonA").value;
    var b = document.getElementById("sonB").value;


    a = parseFloat(a);
    b = parseFloat(b);


    var natija = a - b;


    document.getElementById("natija").innerText = "Natija: " + natija;
}
function darajalarniHisobla() {
    // Foydalanuvchidan sonni olish
    var son = document.getElementById("son").value;

    // Foydalanuvchining kiritgan qiymatni son qilib olish
    son = parseFloat(son);

    // Darajalarni hisoblash
    var daraja2 = Math.pow(son, 2);
    var daraja3 = Math.pow(son, 3);
    var daraja4 = Math.pow(son, 4);

    // Natijalarni HTML elementlariga joylash
    document.getElementById("daraja2").innerText = "Daraja 2: " + daraja2;
    document.getElementById("daraja3").innerText = "Daraja 3: " + daraja3;
    document.getElementById("daraja4").innerText = "Daraja 4: " + daraja4;
}

// let randomNum = prompt("yoshingizni kiriting")

// if (randomNum > 50){
//     console.log("siz kattasiz")
// } else {
//     console.log("siz yoshsiz")
// }


let randomNum = prompt("Somsaning narxini kiriting")

if (randomNum > 3000){
    console.log("qimmat")
} else {
    console.log("arzon")
  }
function qoshish(ikkiHonaliSon) {
    // Ikki honali sonni o'nliklar va birliklar honasiga bo'lib ajratamiz
    let  oqlik = Math.floor(ikkiHonaliSon / 10);
    let  birlik = ikkiHonaliSon % 10;

    // O'nliklar va birliklar qo'shamiz
    let  natija = oqlik + birlik;

    // Natijani console ga chiqaramiz
    console.log("Qo'shish natijasi: " + natija);
}

// Test qilish
let ikkiHonaliSon = 61;
qoshish(ikkiHonaliSon);


