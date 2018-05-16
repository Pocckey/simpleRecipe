import React, { Component } from "react";
import "./TableOfRecipe.css";

export default class TableOfRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: []
        }
        this._storeSelectedRecipe = this._storeSelectedRecipe.bind(this);
        this._clearSelectedRecipe = this._clearSelectedRecipe.bind(this);  
    }
    
    _storeSelectedRecipe(recipeName){
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

    render() {
        return(
            <div id="table-of-recipes">
                <div id="recipesButton">
                { 
                    this.props.recipes.map(res =>
                        <li key={res.name}>
                            <button onClick={() => {
                                this._storeSelectedRecipe(res.name);
                            }}>
                                {res.name}
                            </button>
                        </li>
                    ) 
                }
                </div>
                <br />
                <div id="recipesForm">
                    Selected Recipes: {this.state.selectedRecipe.join()}
                    <br />
                    <button onClick={this._clearSelectedRecipe}>Clear</button>
                </div>
            </div>
        )
    }
}