import React, { Component } from "react";
import "./TableOfRecipe.css";

export default class TableOfRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: [],
            currentRecipe: {}
        }
        this._storeSelectedRecipe = this._storeSelectedRecipe.bind(this);
        this._clearSelectedRecipe = this._clearSelectedRecipe.bind(this);
        this._sortArray = this._sortArray.bind(this);
    }
    
    _storeSelectedRecipe(recipe){
        const recipeName = recipe && recipe.name
        this.setState({
            currentRecipe: recipe
        });
        if ( !this.state.selectedRecipe.includes(recipeName) ) {
            let ary = []
            if (this.state.selectedRecipe.length){
                ary = [...this.state.selectedRecipe, recipeName].sort();
            } else {
                ary = [recipeName]
            }
            this.setState({
                selectedRecipe: ary
            });
        }
    }

    _clearSelectedRecipe(){
        this.setState({
            selectedRecipe: []
        });
    }

    _sortArray(ary){
        return ary.sort().join(", ");
    }

    render() {
        const { selectedRecipe, currentRecipe } = this.state;
        return(
            <div id="table-of-recipes">
                <div id="recipesButton">
                { 
                    this.props.recipes.map(res =>
                        <li key={res.name}>
                            <button onClick={() => {
                                this._storeSelectedRecipe(res);
                            }}>
                                {res.name}
                            </button>
                        </li>
                    ) 
                }
                </div>
                <br />
                <div id="currentRecipe">
                    CurrentRecipe: {currentRecipe.name}
                </div>
                <br />
                <div>
                    CurrentRecipe ingredient: 
                    { currentRecipe && currentRecipe.ingredients && 
                       this._sortArray(currentRecipe.ingredients)
                    }
                   
                </div>
                <br />
                <div id="recipesForm">
                    Selected Recipes: {selectedRecipe.join(", ")}
                </div>
                <br />
                <button onClick={this._clearSelectedRecipe}>Clear</button>
            </div>
        )
    }
}