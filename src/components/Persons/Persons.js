import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
  
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside construtor',props);
  //   this.state ={
  //     persons : [
  //       {id:1,name: "Anis" ,age:27},
  //       {id:2,name :"Anis2" , age:27}
  //     ],
  //     showPerson:false,
  //     }
   }
  
  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }
  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    console.log('[Update Persons.js] Inside componentWillRecveiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[Update Persons.js] Inside shouldComponentUpdate',nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[Update Persons.js] Inside componentWillUpdate', nextProps , nextState);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('[Update Persons.js] Inside componentDidUpdate', nextProps , nextState);
    return true;
  }
  render(){
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person,index) => {            
      return <Person 
          name={person.name}
          age={person.age}
          key={person.id}
          clickedAdd={()=>this.props.clickedAdd()}
          clickedRetire={()=>this.props.clickedRetire(index)}
          changedName={(event)=>this.props.changedName(event, person.id)}
          changedAge={(event)=>this.props.changedAge(event, person.id)}/>
    
     });
    }
}




export default Persons;