import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css'; // Sesuaikan path sesuai struktur proyek Anda

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/recipes/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched recipe data:', data); // Log the fetched data
        setRecipe(data);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  // Split the ingredients string into an array
  const ingredientsArray = recipe.ingredients ? recipe.ingredients.split('\n') : [];
  
  // Split the instructions string into an array of steps
  const instructionsArray = recipe.directions ? recipe.directions.split('\n') : [];

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientsArray.length > 0 ? (
          ingredientsArray.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
      <h3>Instructions:</h3>
<p style={{ textAlign: 'justify' }}>
  {instructionsArray.length > 0 ? (
    instructionsArray.map((step, index) => (
      <span key={index}>
        {index + 1}. {step}
        <br />
      </span>
    ))
  ) : (
    <span>No instructions available</span>
  )}
</p>
    </div>
  );
};

export default RecipeDetail;
