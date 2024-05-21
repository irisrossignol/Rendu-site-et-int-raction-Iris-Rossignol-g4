 
form = document.querySelector('form')


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pseudo = document.querySelector('#pseudo').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  const data = {
      pseudo: pseudo,
      email: email,
      password: password
  };

  console.log(JSON.stringify(data));

  fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erreur réseau');
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      // Redirection seulement si la requête a réussi (statut 200)
      window.location.href = 'reussi.html';
  })
  .catch(error => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du formulaire.');
  });
});