let checkWords = function (data) {
  data = data.split("")
  let vowels = ["a","i","u","e","o"]
  let i = 0
  let total = 0
  while(i !== data.length){
    let j =0
    while(j !== vowels.length){
      // console.log(vowels[j])
      if(data[i] == vowels[j]){
        // console.log(vowels[j])
        total = total + 1
      }else{

      }
      j++
    }

    i++
  }

  console.log(total)
}

checkWords("babababe")