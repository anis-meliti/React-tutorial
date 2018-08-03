
import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside construtor',props);
    this.state ={
      persons : [
        {id:1,name: "Anis" ,age:27},
        {id:2,name :"Anis2" , age:27}
      ],
      showPerson:false,
      }
  }
  
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }
 
 
   changedNameHandler=(event,id)=>{
     const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
       });
       const person ={ ...this.state.persons[personIndex]};
       person.name=event.target.value;
       const persons=[...this.state.persons]
       persons[personIndex]=person;
       this.setState({persons:persons});

  }
  changedAgeHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex(p =>{
     return p.id === id;
      });
      const person ={ ...this.state.persons[personIndex]};
      person.age=event.target.value;
      const persons=[...this.state.persons]
      persons[personIndex]=person;
      this.setState({persons:persons});
 }
  taggelPersonsHandler=()=>{
    
      const doesShow= this.state.showPerson;
      this.setState({showPerson:!doesShow});
      
    }
    deletePersonsHandler=(indexPerson)=>{
      const persons=[...this.state.persons];
      persons.splice(indexPerson,1);
      this.setState({persons: persons});
      //console.log("this delete btn"+indexPerson);
    }
    addPersonHandler=()=>{      
      const persons = this.state.persons;
      let person = {id:persons.length+1, name:"new name", age:"new age"};
      persons.push(person);
      this.setState({persons:persons});
    }

  
  render() {
    console.log('[App.js] Inside render');
       let persons=null;
      if(this.state.showPerson){ 
         persons=<Persons 
                    persons={this.state.persons}
                    clickedRetire={this.deletePersonsHandler}
                    clickedAdd={this.addPersonHandler} 
                    changedName={this.changedNameHandler}
                    changedAge={this.changedAgeHandler}
                    />             
          ;      
    }
        
      
    return (
     
    
        <div>
          <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.taggelPersonsHandler}/>
          {persons}
        </div>
 
    );
  }
}

export default App;
