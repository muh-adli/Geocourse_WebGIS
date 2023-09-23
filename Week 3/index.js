// // Variable

const namaprovinsi = "DKI Jakarta";
console.log(namaprovinsi);

var namakota = "Jakarta Timur";
console.log(namakota);

let namakecamatan = "Makasar";
console.log(namakecamatan);


// // melakukan operasi matematika dengan Variable
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("matematika").innerHTML = x + " + " + y + " = " + z;


// // Menampilkan string, number, boolean, null, undefined, array, object menggunakan typeof
// Numbers:
let nomor = 16;
console.log(nomor);
console.log(typeof(nomor));
document.getElementById("number").innerHTML = "ini adalah " + typeof nomor;

// Strings:
let Name = "Johnson";
console.log(Name);
console.log(typeof(Name));
document.getElementById("string").innerHTML = "ini adalah " + typeof name;

// Booleans
let bool = true;
console.log(bool);
console.log(typeof(bool));
document.getElementById("boolean").innerHTML = "ini adalah " + typeof bool;


// Object
const orang = {firstName:"Muhammad", lastName:"Adli"};
console.log(orang);
console.log(typeof(orang));
document.getElementById("object").innerHTML = "ini adalah " + typeof orang;


// Array
const geoscience = ["Geologi", "Geofisika", "Geodesi"];
console.log(geoscience);
console.log(typeof(geoscience));
document.getElementById("array").innerHTML = "ini adalah " + typeof geoscience;
document.getElementById("array1").innerHTML = "ini adalah " + geoscience[0];
document.getElementById("array2").innerHTML = "ini adalah " + geoscience[1];
document.getElementById("array3").innerHTML = "ini adalah " + geoscience[2];

// undefined
let undef;
console.log(undef);
console.log(typeof(undef));
document.getElementById("undefined").innerHTML = "ini adalah " + typeof undef;

// // Conditional sederhana if...else
// const a =4;
const a = prompt("Tulis nomor untuk dianalisis5: ");
function CekNomor(a) {
    let result;
    if (a % 2 == 0) {
      result = 'Nomor Genap';
    } else {
      result = 'Nomor Ganjil';
    }
    return result;
  };
console.log(CekNomor(a));
document.getElementById("ifelse").innerHTML =
"Menggunakan if untuk menentukan ganjil atau genap<br>"+ a + " adalah nomor " + CekNomor(a);

// // Mengambil dan manipulasi data array dan object
// Membuat data array
const Kota = ["Jakarta", "Bandung", "Bogor", "Bandar Lampung"];
console.log("Display data array ke 3: " + Kota[3]);

// Menambahkan data pada array
Kota.push("Balikpapan");
Kota.push("Papua");
console.log("Menghilangkan data baru: " + Kota);

// Mengilangkan data pada array
Kota.pop("Papua");
console.log("Menghilangkan Papua, hasilnya: " + Kota);
console.log(Kota);

// Membuat data object
function tambahmahasiswa(Nama, Panggilan, Jurusan) {
  mahasiswa.Nama = Nama;
  mahasiswa.Panggilan = Panggilan;
  mahasiswa.Jurusan = Jurusan;
}
const mahasiswa = {Nama:"Muhammad Adli", Panggilan:"Adli", Jurusan:"Geofisika"};
console.log(mahasiswa);
document.getElementById("dataobject").innerHTML = mahasiswa.Panggilan + ' adalah ' + typeof mahasiswa;
// console.log(JSON.stringify(mahasiswa));

// Menghapus data object
const mahasiswabaru = new Map([
  ["Aryka", "Bekasi"],
  ["Mustika", "Lampung"],
  ["Zelica", "Lampung"],
  ["Tasya", "Sumatera Selatan"]
]);
mahasiswabaru.delete("Aryka");
console.log(mahasiswabaru.size);
document.getElementById("hapusobject").innerHTML = "total mahasiswa baru " + mahasiswabaru.size;

// // Melakukan fungsi looping menggunakan for, while, dan do
// for

let text = "";
for (let i = 0; i < Kota.length; i++) {
    text += Kota[i] + "<br>";
    }
document.getElementById("for").innerHTML = "penggunaan for:<br> " + text;

// while
let detik = 0;

while (detik < 60) {
    detik++;5
    console.log(detik);
}

console.log(detik);
document.getElementById("while").innerHTML = "penggunaan while untuk menghitung detik: <br>" + detik;

// do
let NomorDo = '';
let b = 0;

do {
    console.log(NomorDo);
    b = b + 1;
    NomorDo = NomorDo + b;
} while (b < 9);

console.log(NomorDo);
document.getElementById("do").innerHTML = "penggunaan do untuk mengitung nomor sampai 9 <br>" + NomorDo;

// // Menampilkan fungsi diatas pada console browser