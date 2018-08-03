import React from 'react';
import classes from '../Persons/Person/Person.css';


const cockpit= (props)=>{
    let style=classes.button;
if(props.showPerson){ 
    style+=" "+classes.bottonPressed ;
}

    return(
        <div className= {classes.container} >
                  <button className={style}
                    onClick={props.clicked}> Show/hide</button>
          </div>
    );

}

export default cockpit;