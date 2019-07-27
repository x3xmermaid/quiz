let star = function (data) {
  let i = 1
  let data2= data
  while(i <= data2){
    // let data2 = 5
    let j = data
    let stars = ""
    while(j !==  0){
      if(j > i){
        stars = stars.concat("  ")
      }else{
        stars = stars.concat(" *")
      }
      j--
    }
    console.log(stars)
    i++
  }
}

star(5)