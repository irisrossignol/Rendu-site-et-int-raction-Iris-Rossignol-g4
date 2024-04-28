let token = localStorage.getItem('token')

if (!token) {
    window.location.href = 'login.html'
}

fetch('http://localhost:3000/user/' , {
    headers: {
        'x-access-token': `${token}`,
    },
})
.then((response) => response.json())
.then((data) => {
    let user = document.querySelector('#user')
    user.inerHTML = `
    <h1>${data.pseudo}</h1>
    <h2>${data.email}</h3>
    <a href="index.html">Back</a>
    `

    document.getElementById('pseudo').textContent = data.pseudo;
    document.getElementById('email').textContent = data.email;
})