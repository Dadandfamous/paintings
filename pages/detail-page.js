function submitComment () {
  console.log('Hello')
  let inputField = document.getElementById('name')
  let name = inputField.value
  let textArea = document.getElementById('msg')
  let msg = textArea.value
  let comment = document.createElement('section')
  let h3 = document.createElement('<h3>')
  console.log(msg)
  console.log(h3)
}