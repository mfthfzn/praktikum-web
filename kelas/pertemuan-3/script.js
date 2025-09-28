// console.log("Hello World!");

// let nama = 'adi';
// const umur = 20;

// console.log(nama);
// console.log(umur);

// function salam() {
//     console.log(`Selamat datang, ${nama}`);
// }

// let halo = salam();
// function tambah(a, b) {
//     return a + b;
// }

// let hasil = tambah(10,10);
// console.log(hasil);

// let multiply = (a, b) => a * b;
// console.log(multiply(10, 10))

const title = document.querySelector(".judul");
title.textContent = "Pemrograman Web 2024";
// title.style.margin = "100px 0px 0px 0px";
// title.style.backgroundColor = "blue";

// title.classList.toggle("eko");

const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function() {
    title.classList.toggle("sembunyi")
});