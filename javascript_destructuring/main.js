const produk = ["Apple", "Samsung", "Redmi", "Vivo", "OPPO"];

// destructuring array
const [a, s, r, v, o] = produk;
console.log("1. destructuring array");
console.log(a);
console.log("================");

const dataMHS = {
    nama: "vicky",
    alamat: "sleman",
    noHp: "081234567890",
    jurusan: "Teknik Informatika",
    nilai: {
        tugas: 85,
        uts: 90,
        uas: 98,
    },
};
// destructuring object
const { nama, alamat, noHp, jurusan, ...nilai } = dataMHS;
console.log("2. destructuring object");
console.log(noHp);
console.log("================");

// destructuring function
function cetakDataMHS({
    nama: namaMHS,
    alamat,
    noHp,
    jurusan,
    nilai: { tugas, uts, uas },
    angkatan = "2023",
}) {
    console.log(
        `nama saya ${namaMHS} asal jurusan ${jurusan}, nilai uas saya adalah ${uas} dan saya angkatan tahun ${angkatan}`
    );
}
console.log("3. destructuring function");
cetakDataMHS(dataMHS);
