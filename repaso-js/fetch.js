const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url, {
//   method: 'POST', // GET, POST, PUT, DELETE, PATCH
//   headers: {
//     'Content-type': 'application/json',
//     'Authorization': 'Bearer tokendeutorizacionparaquesepaqueestamosautorizados'
//   },
//   body: JSON.stringify({
//     name: 'Chanchito feliz',
//     website: 'https://jsonplaceholder.typicode.com'
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

  const fn = async () => {
    const response = await fetch(url, {
      method: 'POST', // GET, POST, PUT, DELETE, PATCH
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer tokendeutorizacionparaquesepaqueestamosautorizados'
      },
      body: JSON.stringify({
        name: 'Chanchito feliz',
        website: 'https://jsonplaceholder.typicode.com'
      })
    })

    const data = await response.json();
    console.log(data);
  }

  fn();