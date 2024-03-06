import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.jpg'; // Assurez-vous de remplacer './logo.png' par le chemin correct de votre logo

function App() {
  // Utilisez useState pour gérer l'état de vos données
  const [posts, setPosts] = useState([]);

  // Utilisez useEffect pour charger les données lorsque le composant est monté
  useEffect(() => {
    // Logique pour charger les données depuis votre backend
    // Ici, vous pouvez simuler des données de publications fictives pour les exemples
    const fakePosts = [
      { _id: 1, title: "Première publication", content: "Contenu de la première publication" },
      { _id: 2, title: "Deuxième publication", content: "Contenu de la deuxième publication" },
      { _id: 3, title: "Troisième publication", content: "Contenu de la troisième publication" }
    ];
    setPosts(fakePosts);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nadin.tchat</h1>
      </header>
      <div className="posts-container">
        {/* Affichez vos publications ici en utilisant la liste des posts */}
        {posts.map(post => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
