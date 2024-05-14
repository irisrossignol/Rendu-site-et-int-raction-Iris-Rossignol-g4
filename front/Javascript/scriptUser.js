let token = localStorage.getItem('token')

// if (!token) {
//     window.location.href = 'login.html'
// }

fetch('http://localhost:3000/user/' , {
    headers: {
        'x-access-token': `${token}`,
    },
})
.then((response) => response.json())
.then((data) => {
    console.log(data)

    document.getElementById('pseudo').textContent = data.pseudo;
    document.getElementById('email').textContent = data.email;
})