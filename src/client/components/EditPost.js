import React, { Component } from 'react'

export default class EditPost extends Component {
    render() {
      if (this.props.isOpen === false) return null;
      return (
        <div>
          <div className="backdropStyle" onClick={e => this.close(e)}></div>
          <div className="modalStyle">
            <div className="newRecipeStyle">
              <form onSubmit={this.handleEdit.bind(this)}>
                <div >
                  <label className="label" htmlFor="recipe_name">Recipe</label>
                  <input  id="recipe" defaultValue={this.props.recipe.recipe} type="text"  required className="validate" />
          </div>
                <div>
                  <label className="label" htmlFor="recipe_name">Ingredients</label>
                  <input  id="ingredients" defaultValue={this.props.recipe.ingredients} placeholder="Ex: egg, rice, olive oil" type="text" required className="validate" />
          </div>
                 <button className="btn orange lighten-1"> edit recipe </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    close(e) {
      e.preventDefault();
      if (this.props.onClose) {
        this.props.onClose()
      }
    }
    
    handleEdit(e) {
      e.preventDefault();
      let recipe = document.getElementById("recipe").value;
      let ingredients = document.getElementById("ingredients").value.split(',');
      let fullRecipe = {
        recipe,
        ingredients
      }
      this.props.editRecipe(fullRecipe, this.props.index)
      this.props.onClose()
    }
  }