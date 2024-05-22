const login = async () => {
    let email = document.querySelector('#email') //selection les id
    let password = document.querySelector('#password')

    console.log(email, password)

    let response = await fetch('http://localhost:3000/auth/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ //jcrois c pr les lire ? les données
            email: email.value,
            password: password.value,
        }),
    })

    if (response.status !== 200) { //erreur
        console.log('erreur')
        window.location.href = 'connexion.html' //si utilisateur introuvable retourne a la page connex
    }
    else {

        let data = await response.json() //att que data soit trouvé
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', email)
        window.location.href = 'profil.html' //si trouvé alors va page profil
    }

}
