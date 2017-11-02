
// let box0click = function () {
//   document.getElementById('box0').click()
//   console.log('it works!')
// }

const box0 = document.getElementById('box0')

function changeImage () {
  if (document.getElementById('clickChange0').src === 'assets/images/board/pieces/blank.jpg') {
    document.getElementById('clickChange0').src = 'assets/images/board/pieces/redx.png'
  } else if (document.getElementById('clickChange0').src === 'assets/images/board/pieces/redx.png') {
    document.getElementById('clickChange0').src = 'assets/images/board/pieces/candyo.jpg'
  } else if (document.getElementById('clickChange0').src === 'assets/images/board/pieces/candyo.png') {
    document.getElementById('clickChange0').src = 'assets/images/board/pieces/blank.jpg'
  }
}

box0.onclick = function () {
  changeImage()
  console.log('It works!')
}
