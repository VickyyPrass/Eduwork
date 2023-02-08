const nilai = [90, 60, 75, 100, 50, 80, 30, 98];

// console.log(ketentuan);
const hasil = nilai.filter((a) => a >= 70).map((x) => x);

const ketentuan = hasil.length > 4 ? "anda lulus" : "anda gagal";
console.log(`jumlah batas nilai yang lulus adalah 4`);
console.log(`jumlah nilai yang lulus :  ${hasil.length}`);
console.log(`nilai yang lulus adalah ${hasil}`);
console.log(`hasil : ${ketentuan}`);
