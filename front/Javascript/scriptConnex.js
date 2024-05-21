const login = async () => {
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    console.log(email, password)

    let response = await fetch('http://localhost:3000/auth/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
    })

    if (response.status !== 200) {
        console.log('erreur')
        window.location.href = 'connexion.html'
    }
    else {

        let data = await response.json()
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', email)
        window.location.href = 'profil.html'
    }

}
