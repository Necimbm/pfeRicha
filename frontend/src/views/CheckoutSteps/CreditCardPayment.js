import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm"  className="form">
        <div><Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        </div>
        <form  className="form">
        	<div><input
            type="tel"
            name="number"
            placeholder="Numéro de la carte"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>
          <div>
          <input
            type="tel"
            name="name"
            placeholder="Prénom"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>
         <div>
         <input
            type="tel"
            name="expiry"
            placeholder="Expiré le"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
         </div>
         <div>
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </div>
        
        </form>
      </div>
    );
  }
}