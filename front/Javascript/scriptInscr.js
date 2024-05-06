form = document.querySelector('form')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let pseudo = document.querySelector('#pseudo').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    const data =  {
        pseudo: pseudo,
        email: email,
        password: password
    }

    console.log(JSON.stringify(data))

    fetch("http://localhost:3000/auth/signup", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)


    })
    .catch(e=> console.log(e))

    window.location.href = 'reussi.html'
});