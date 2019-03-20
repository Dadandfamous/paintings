function doesNotPassAllValidations(name, msg){
  if (!name && !msg ) {
      alert('Please enter a name and a message before submitting.')
      // return true
  } else if (!name) {
      alert('Please enter a name before submitting.')
      // return true
  } else if (!msg) {
      alert('Please enter a message before submitting.')
      // return true
  } else if (msg.length > 300) {
      alert('Please keep your message to a maximum of 300 characters.')
      // return true
  } else if (msg === 'inappropriate language'){
      alert('Please consider a more sophisticated wording.')
      // return true
  }  else { 
      return false
  }
} 

function submitComment (){

  let inputField = document.getElementById('name')
  let name = inputField.value
  let bigName = name.charAt(0).toUpperCase() + name.slice(1)
  let txtInputField = document.getElementById('msg')
  const msg = txtInputField.value
  console.log(msg)

  if(doesNotPassAllValidations(bigName, msg)){
    return null
  } else {

  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  
  h3.innerHTML = `${bigName} said:`
  p.innerHTML = msg
  comment.classList.add("comment")

  comment.appendChild(h3)
  comment.appendChild(p)

  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)
  inputField.value = null
  txtInputField.value = null
  }
}
