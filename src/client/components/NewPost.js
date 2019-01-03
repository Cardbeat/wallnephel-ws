import React, { Component } from 'react'


export default class NewPost extends Component {
    render() {
      if (this.props.isOpen === false) return null;   
      return (
        <div>
          <div className="backdropStyle" onClick={e => this.close(e)}></div>
          <div className="modalStyle">
            <div className="newRecipeStyle">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div >
                  <label className="label" htmlFor="recipe_name">Recipe</label>
                  <input  id="recipe" type="text"  required className="validate" />
          </div>
                <div>
                  <label className="label" htmlFor="recipe_name">Ingredients</label>
                  <input  id="ingredients" defaultValue="" placeholder="Ex: egg, rice, olive oil" type="text" required className="validate" />
          </div>
                 <button className="btn orange lighten-1"> create recipe </button>
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
    
    handleSubmit(e) {
      e.preventDefault();
      let recipe = document.getElementById("recipe").value;
      let ingredients = document.getElementById("ingredients").value.split(',');
      let fullRecipe = {
        recipe,
        ingredients
      }
      this.props.createRecipe(fullRecipe)
      this.props.onClose()
    }
  }