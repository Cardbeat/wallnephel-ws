import React, { Component } from 'react'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Exhibition from './Exhibition'

let data = (typeof localStorage["recipes"] != "undefined") ? JSON.parse(localStorage.getItem('recipes')) : [
    {recipe: 'Pasta',ingredients: ['egg', 'olive oil', 'flour']},
    {recipe: 'Omellete', ingredients: ['egg', 'cheese'] }
  ]

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          modal: "hide",
          recipes: data ,
          editRecipe: "",
          isModalNewOpen: false,
          isModalEditOpen: false
        };
      }
      render() {
        return (
            <div>
                <nav className="deep-purple darken-1">
                  <div className="nav-wrapper container ">
                  <img src='https://i.imgur.com/Alvd65L.png' height='64' width='64' />
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><button className="btn purple lighten-4" onClick={() => this.openModalNew()}> New Post </button></li>
                    </ul>
                  </div>
                </nav>
            <div className="container" >
            < Exhibition />
              <div className="row">
                <div className="col s12">
                  <NewPost
                    isOpen={this.state.isModalNewOpen}
                    onClose={() => this.closeModal()}
                    createRecipe={this.createRecipe.bind(this)}
                  />
                  <EditPost
                    isOpen={this.state.isModalEditOpen}
                    onClose={() => this.closeModal()}
                    editRecipe={this.editRecipe.bind(this)}
                    recipe={this.state.editRecipe.recipe}
                    index={this.state.editRecipe.index}
                  />
                </div>
              </div>
            </div>
        </div>
        );
      }
    
      openModalNew() {
        this.setState({ isModalNewOpen: true });
      }
      
      openModalEdit() {
        this.setState({ isModalEditOpen: true });
      }
    
      closeModal() {
        this.setState({ isModalNewOpen: false });
        this.setState({ isModalEditOpen: false });
      }
      
      createRecipe(recipe) {
        this.state.recipes[this.state.recipes.length] = recipe
        localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
      }
      editRecipe(recipe, index) {
        this.state.recipes[index] = recipe
        localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
      }
      
      onDelete(index) {
        let recipes = this.state.recipes
        recipes = recipes.filter( (item, val) => {
           return index !== val;
         })
        this.setState({
          recipes: recipes
        })
      }
      
      onEdit(index) {
        this.openModalEdit()
        this.setState({
          editRecipe: {
            recipe: this.state.recipes[index],
            index: index
          }
        })
        
      }
}


