let star = function (data) {
  let i = data
  while(i !== 0){
    let j = i
    let stars = "*"
    while(j !== 1){
      stars = stars+" *"
      j--
    }
    console.log(stars)
    i--
  }
}

star(5)