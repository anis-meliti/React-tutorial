import React from 'react';
import classes from '../Persons/Person/Person.css';
import Aux from '../../hoc/Aux';


const cockpit= (props)=>{
    let style=classes.button;
if(props.showPerson){ 
    style+=" "+classes.bottonPressed ;
}

    return(
        <Aux>
                  <button className={style}
                    onClick={props.clicked}> Show/hide</button>
          </Aux>
    );

}

export default cockpit;