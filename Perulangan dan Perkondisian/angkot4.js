// if else for
// latihan angkot

//angkot 1 - 6 tidak beroperasi
//angkot 7 - 10 beroperasi

let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`)
    } else if(noAngkot == 8) {
       console.log(`Angkot No. ${noAngkot} sedang lembur`) 
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`)
    }
}