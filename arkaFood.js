let diskon = function (harga, promo){
  // if(diskon 0)
  return new Promise((resolve, reject) => {
    let diskon = 0
    let max = 0

   if(promo == ''){
     resolve(harga)
    }else if(promo !== "ARKAFOOD5" && promo !== "DITRAKTIRDEMY"){
      reject("Promo not Found")
    }else{
    promo === "ARKAFOOD5" ? diskon = 50 : diskon = 60
    promo === "ARKAFOOD5" ? max = 50000 : max = 30000

  let potongan = harga * diskon / 100
  harga = harga - potongan
  
  resolve(harga)
  }
  }) 
}

let arkaFoods = function (harga, promo, jarak, pajak, callback) {
  // let promo2 = "ARKAFOOD5/DITRAKTIRDEMY"
  let i = 0
  let total = 0
  let kirim = 5000

  if(jarak > 1.5){ 
      jarak++
      jarak = Math.floor(jarak - 1.5)
      // console.log(jarak - 1.5)
      kirim = 5000 + (jarak * 3000)
  }

  let hargaPajak
  pajak === true ? hargaPajak = harga * 5 /100 : hargaPajak = 0

  if(promo == 'ARKAFOOD5' && harga < 50000){
    return callback("minimal belanja Promo 'ARKAFOOD5' Kupon 50000")
  }else if(promo == 'DITRAKTIRDEMY' && harga < 25000){
    return callback("minimal belanja Promo 'DITRAKTIRDEMY' Kupon 25000")
  }
  
  // if(promo )
  diskon(harga, promo).then(value => {
    callback(value+kirim+hargaPajak)
  }).catch(err => {
    callback(err)
  })
}

arkaFoods(25000, "", 1, false, function(value){
  console.log(value)
})