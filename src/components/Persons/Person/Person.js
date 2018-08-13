import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from'./Person.css';
import withClasses from '../../../hoc/withClasses';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside construtor',props);
      //   this.state ={
      //     persons : [
      //       {id:1,name: "Anis" ,age:27},
      //       {id:2,name :"Anis2" , age:27}
      //     ],
      //     showPerson:false,
      //     }
       }
      
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount');
      }
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount');
      }
 render(){
     console.log('[Person.js] Inside render');
    return (
        <div className={classes.Person}> 
            <div className={classes.outputText} onClick={this.props.click}>I'm 
            <i> {this.props.name}</i> and I'm  <i> {this.props.age} </i> years old </div>
            <div> {this.props.children}</div>
            <input type="text" placeholder="Name" onChange={this.props.changedName} className={classes.inputText}/>
            <input type="number" placeholder="Age" onChange={this.props.changedAge}className={classes.inputText}/>
            <div>
                <button className={classes.add} onClick={this.props.clickedAdd}>+</button>
                <button className={classes.add} onClick={this.props.clickedRetire} > - </button>
            </div>
        </div>
);

 }
    
    
}

Person.PropTypes={
age:PropTypes.number
};
export default withClasses(Person, Person.classes);