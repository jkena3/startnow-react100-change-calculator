import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {//set initial state
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    };
    //event binding to update values
    this.handleChange = this.handleChange.bind(this);
    //event binding for calculations
    this.calculate = this.calculate.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate(e) {
   e.preventDefault();
   
   let amountDue = this.state.amountDue;
   let amountReceived = this.state.amountReceived;

   if (amountReceived < amountDue){
    alert("Insufficient funds!");

 } else if (amountReceived === amountDue){
    alert("No change due.");

} else {

    //dealing with dollars below
   let changeDue = Math.abs((amountDue - amountReceived)).toFixed(2);
   let subTotal =  Math.abs((amountDue - amountReceived)) * 100;
   
   //individual bill calculations
   let dollars =   Math.floor((subTotal)/100)
   let twenties =  Math.floor(dollars/20);
   let tens =      Math.floor((dollars-(twenties*20))/10);
   let fives =     Math.floor((dollars-(twenties*20)-(tens*10))/5);
   let ones =      Math.ceil(dollars-(twenties*20)-(tens*10)-(fives*5));
    
   //individual coin calculations
   let change$ =   Math.floor((subTotal)/100)
   let quarters =  Math.floor(((subTotal)-(change$*100))/25); 
   let dimes =     Math.floor(((subTotal)-(change$*100)-(quarters*25))/10); 
   let nickels =   Math.floor(((subTotal)-(change$*100)-(quarters*25)-(dimes*10))/5);         
   let pennies =   Math.ceil((subTotal)-(change$*100)-(quarters*25)-(dimes*10)-(nickels*5));
   
     //console.log(twenties, tens, fives, ones, quarters, dimes, nickels, pennies);

   this.setState({
      changeDue: `The total change due is $${changeDue}`,
      amountDue,
      amountReceived,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
   });
 }
}

render() {
  return (
    <div className='container'>
      <div className='page-header'>
        <h1>Change Calculator</h1>
        <p>Tagline here</p>
      </div>
      {/*left side/user input*/}
      <div className='row'>
        <div className='col-md-4'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Enter Information</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label>How much is due?</label>
                <input name='amountDue' className='form-control input-md' onChange={this.handleChange} value={this.state.amountDue} />
                <label>How much was received?</label>
                <input name='amountReceived' className='form-control input-md' onChange={this.handleChange} value={this.state.amountReceived} />
              </div>
              <div className='panel-footer'>
                <button name='btn' type='btn' className='btn btn-primary form-control' onClick={this.calculate}>Calculate</button>
              </div>
            </div>
          </div>
        </div>


        {/*right side/output*/}
        <div className='col-md-8 results-wrapper'>
          <div className='panel panel-default'>
            <div className='panel-body' onChange={this.handleChange}>
              <div className='alert alert-success'>
                {this.state.changeDue}
              </div>
              {/*right panel, top row*/}
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Twenties</h4>
                        <p name='twenties' className='change lead text-center'>{this.state.twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Tens</h4>
                        <p name='tens' className='change lead text-center'>{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Fives</h4>
                        <p name='fives' className='change lead text-center'>{this.state.fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Ones</h4>
                        <p name='ones' className='change lead text-center'>{this.state.ones}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row bottom'>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Quarters</h4>
                        <p name='quarters' className='change lead text-center'>{this.state.quarters}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Dimes</h4>
                        <p name='dimes' className='change lead text-center'>{this.state.dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Nickles</h4>
                        <p name='nickles' className='change lead text-center'>{this.state.nickles}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='panel panel-default'>
                      <div className='well-lg'>
                        <h4 className='text-center'>Pennies</h4>
                        <p name='pennies' className='change lead text-center'>{this.state.pennies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
}



export default App;
