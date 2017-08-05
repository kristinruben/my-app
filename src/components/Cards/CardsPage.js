import React, { Component } from 'react';
// import CardForm from './CardForm'
import CardList from './CardList'

class CardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      title: '',
      sweetness: 'Semi-Sweet',
      variety: 'Mead',
      ingredients: [],
      ingredient: '',
      steps: [],
      amount: 0.0,
      unit: '',
      tempId: 1,
      action: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.handleIngredientDelete = this.handleIngredientDelete.bind(this);
    this.handleStepDelete = this.handleStepDelete.bind(this);
    this.loadCards = this.loadCards.bind(this);
    this.createCard = this.createCard.bind(this);

  }
  componentDidMount(){
    this.loadCards();
  }

  loadCards(){
    $.ajax({
      url: "/api/v1/cards",
      contentType: "application/json"
    })
    .success(data => {
      this.setState({cards: data.cards});
    })
  }

  handleChange(e){
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }

  handleAddIngredient(event){
    event.preventDefault();
    let updated_ingredients = this.state.ingredients
    let addedIngredient = {id: this.state.tempId, name: this.state.ingredient, unit: this.state.unit, amount: Number.parseFloat(this.state.amount) }

    let new_temp_id = this.state.tempId + 1
    updated_ingredients.push(addedIngredient)
    this.setState({ ingredients: updated_ingredients, tempId: new_temp_id, ingredient: '', unit: '', amount: 0.0 });
  }

  handleAddStep(event){
    event.preventDefault();
    let updated_steps = this.state.steps
    let addedStep = {id: this.state.tempId, action: this.state.action }

    let new_temp_id = this.state.tempId + 1
    updated_steps.push(addedStep)
    this.setState({ steps: updated_steps, tempId: new_temp_id, action: ''});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.ingredients.length === 0) {
      alert('Does creating a card with no ingredients even make sense?')
    } else if (this.state.steps.length === 0) {
      alert('Does creating a card with no steps even make sense?')
    } else {
      let card_ingredients = [];
      let card_steps = []

      for(let ingredient of this.state.ingredients) {
        delete ingredient.id
        card_ingredients.push(ingredient)
      }

      for (let i = 0; i < this.state.steps.length; i++) {
        delete this.state.steps[i].id
        card_steps.push(this.state.steps[i])
      }

      let jstring = JSON.stringify({
        "card": {
          "title": this.state.title,
          "sweetness": this.state.sweetness,
          "variety": this.state.variety,
          "ingredients_attributes": card_ingredients,
          "steps_attributes": card_steps
        }
      });
      this.createCard(jstring);
    }
  }

  createCard(jstring) {
    $.ajax({
      method: "POST",
      url:"/api/v1/cards",
      contentType: "application/json",
      data: jstring

    })
    .success(data => {
      this.loadCards();
      this.setState({title: '', ingredients: [], steps: []})
    })
  }

  handleIngredientDelete(id) {
    event.preventDefault();
    let newIngredients = this.state.ingredients.filter(item => item.id !== id)
    this.setState({ingredients: newIngredients})
  }

  handleStepDelete(id) {
    event.preventDefault();
    let newSteps = this.state.steps.filter(item => item.id !== id)
    this.setState({steps: newSteps})
  }

  render() {

    if(this.state.cards === null) {
      return null;
    }

    let cardList;

    if(this.state.cards.length === 0) {
      cardList = <BlankCard
        cardText="cards"
        />
    } else {
      cardList = <CardList
        cards={this.state.cards}
        />
    }

    return(
      <div className="row column">
        <div className="react-cards row">
          <div className="cards-index-left small-12 medium-8 columns">
            <h2 className="text-center">New Card</h2>
            <div className="ingredients-section">
              <IngredientList
                ingredients={this.state.ingredients}
                handleIngredientDelete={this.handleIngredientDelete}
                buttonText="fa fa-trash-o"
                />
              <IngredientForm
                ingredient={this.state.ingredient}
                unit={this.state.unit}
                amount={this.state.amount}
                handleAddIngredient={this.handleAddIngredient}
                handleChange={this.handleChange}
                />
            </div>
            <hr></hr>
            <div className="steps-section">
              <StepList
                steps={this.state.steps}
                buttonText="fa fa-trash-o"
                handleStepButton={this.handleStepDelete}
                stepType={"normal-step"}
                />
              <StepForm
                action={this.state.action}
                handleChange={this.handleChange}
                handleAddStep={this.handleAddStep}
                />
            </div>
            <hr></hr>
            <div className="section">
              <CardForm
                handleFormSubmit={this.handleFormSubmit}
                handleChange={this.handleChange}
                title={this.state.title}
                sweetness={this.state.sweetness}
                variety={this.state.variety}
                />
            </div>
          </div>
          <div className="cards-index-right small-12 medium-4 columns">
            <h2 className="text-center">Cards</h2>
            {cardList}
          </div>
        </div>
      </div>
    )
  }
}
export default CardsPage;
