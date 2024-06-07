// src/pages/Recipes.js
import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList searchQuery={searchQuery} />
    </div>
  );
};

export default Recipes;
