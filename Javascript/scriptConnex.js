

const login = async () => {
    let email = document.querySelector('input[name="email"]').value
    let password = document.querySelector('input[name="password"]').value

    let response = await fetch('http://localhost:3000/auth/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })

    let data = await response.json()
    console.log(data)
    localStorage.setItem('token', data.token)

    window.location.href = 'profil.html'

}

