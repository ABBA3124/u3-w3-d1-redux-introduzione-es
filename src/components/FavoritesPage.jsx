import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  // Utilizza useSelector per accedere allo stato dei preferiti dal Redux Store
  const favorites = useSelector(state => state.jobs.favorites);
  const dispatch = useDispatch(); // Utilizza useDispatch per inviare azioni

  // Funzione per rimuovere un'azienda dai preferiti
  const removeFavorite = (company) => {
    dispatch({ type: 'favorites/remove', payload: company });
  };

  // Verifica se non ci sono preferiti aggiunti e mostra un messaggio
  if (!favorites || favorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  // Se ci sono preferiti, renderizza la lista delle aziende preferite
  return (
    <div>
      <h1>Favorite Companies</h1>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>
            {/* Utilizza Link per navigare alla pagina dell'azienda */}
            <Link to={`/${fav}`}>{fav}</Link>
            {/* Aggiungi un pulsante per rimuovere l'azienda dai preferiti */}
            <button className="ms-5" onClick={() => removeFavorite(fav)} style={{ marginLeft: '10px' }}>Rimuovi🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
