function submitComment () {
  console.log('Hello')
  let inputField = document.getElementById('name')
  let name = inputField.value
  let textArea = document.getElementById('msg')
  let msg = textArea.value
  let comment = document.createElement('section')
  let h3 = document.createElement('<h3>')
  let p = document.createElement('<p>')
  
  // assigning innerhtml:

  innerHTML.h3 = `${name} said:`
  innerHTML.p = msg

  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)
}