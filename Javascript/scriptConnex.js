        /*form = document.querySelector('form')
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

    const token = localStorage.getItem('token')
    if (token) {
        validToken(token)
        .then((response) => {
    if (response.ok) {
        window.location.href = 'profil.html'
    }
        })
        .catch((error) => {
            console.log('error', error);
        });
    }

    async function validToken(token) {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
                
        })
        return
    }


    let response = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pseudo: pseudo,
            password: password,
        }),
        })

        let data = await response.json()
            localStorage.setItem('token', data)
        
    })*/

    
    
    
    
    
    
    /*form = document.querySelector('form')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let pseudo = document.querySelector('#pseudo').value
    let password = document.querySelector('#password').value

    const data =  {
        pseudo: pseudo,
        password: password
    }

    console.log(JSON.stringify(data))

    fetch("http://localhost:3000/auth/login", {
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

    });*/


form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
        return resizeBy.status(404).json({ error: 'Password not valid' })
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    resizeBy.json(token)

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
    localStorage.setItem('token', data)

    window.location.href = 'profil.html'
        })


