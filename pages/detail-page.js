function submitComment () {
  console.log('Hello')
  let inputField = document.getElementById('name')
  let name = inputField.value
  let textArea = document.getElementById('msg')
  let msg = textArea.value
  let comment = document.createElement('section')
  let h3 = document.createElement('h3')
  let p = document.createElement('p')
  
  // assigning innerhtml:

  h3.innerHTML = `${name} said:`
  p.innerHTML = msg

  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)

  inputField.value = null
  textArea.value = null
}

