import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [order, setOrder] = useState([]);

useEffect(() => {
  fetch('http://product-service:3002/products')
    .then(res => res.json())
    .then(setProducts);
}, []);

const login = async () => {
  const res = await fetch('http://user-service:3001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  setToken(data.token);
};

const makeOrder = async () => {
  await fetch('http://order-service:3003/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ products: order })
  });
  alert('Commande passée !');
};

  return (
    <div>
      <h1>Produits</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} - ${p.price}
            <button onClick={() => setOrder([...order, p._id])}>Ajouter au panier</button>
          </li>
        ))}
      </ul>

      <h2>Connexion</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <h2>Panier</h2>
      <button onClick={makeOrder} disabled={!token}>Commander</button>
    </div>
  );
}

export default App;
