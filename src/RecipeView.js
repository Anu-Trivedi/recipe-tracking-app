function RecipeView({recipe, deleteRecipe}){

  const { name, cuisine, photo, ingredients, preparation } = recipe;
    return (
      <tr>
        <td><p>{name}</p></td>
        <td><p>{cuisine}</p></td>
        <td><img src={photo} alt={name} /></td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td><button name="delete" onClick={() => deleteRecipe(recipe)}>Delete</button></td>
      </tr>
    );
  
}

export default RecipeView;