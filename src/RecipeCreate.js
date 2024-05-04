import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  
   const initialFormData = {
     name: "",
     cuisine: "",
     photo: "",
     ingredients: "",
     preparation: "",
   }

   const [formData, setFormData] = useState(initialFormData);
  
   //handles text change in input fields
   const handleChange = (event) => {
     setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
   }
   
   //creates a new recipe on form submission
   const handleSubmit = (event) => {
     event.preventDefault();
     createRecipe(formData);
     setFormData(initialFormData);
   }
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="text"
                onChange={handleChange}
                value={formData.photo}
                placeholder="Photo"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
