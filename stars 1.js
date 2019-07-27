let star = function (data) {
  let i =0
  while(i < data){
    let j =0
    let stars = "*"
    while(j < i){
      stars = stars+" *"
      j++
    }
    console.log(stars)
    i++
  }
}

star(5)