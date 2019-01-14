import React, { Component } from 'react'
import NewPost from './NewPost'
import EditPost from './EditPost'
import Exhibition from './Exhibition'
import { Redirect } from 'react-router'

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
        if(this.props.location.state === undefined) {
          return <Redirect to='/' />
        }
        return (
            <div>
                <nav className="deep-purple darken-1">
                  <div className="nav-wrapper container ">
                  <img className="logo" src='https://i.imgur.com/Alvd65L.png' height='54' width='54' />
                    <ul id="nav-mobile" class="right ">
                        <li><button className="btn purple lighten-4" onClick={() => this.openModalNew()}> New Post </button></li>
                    </ul>
                  </div>
                </nav>
            <div>
            < Exhibition />
              <div>
                <div>
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


