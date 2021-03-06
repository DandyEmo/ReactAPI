import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import { Route, Routes, Link } from 'react-router-dom';
import CharacterItem from './components/characters/CharacterItem';
import ShowDetails from './components/characters/ShowDetails';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />

      <Routes>
        <Route
          path="/"
          element={<CharacterGrid isLoading={isLoading} items={items} />}
        />
        <Route
          path="/characters/:character"
          element={<ShowDetails items={items} />}
        />
      </Routes>
    </div>
  );
};

export default App;
