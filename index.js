// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function (data) {
  let hasil = [];
  for (var counter = 0; counter < data.length; counter++) {
    let isi = "-" + " " + data[counter].nama + " x " + data[counter].kuantitas;
    hasil.push(isi);
  }
  return hasil;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function (data) {
  let hasil = null;
  for (var counter = 0; counter < data.length; counter++) {
    hasil = data[counter].harga * data[counter].kuantitas + hasil;
  }
  return hasil;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log("\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan));
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
