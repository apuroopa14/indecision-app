import React from 'react';

//*********Action stateless funtional component************************ */
const Action=(props)=>(
    <div>
    <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>What should I do? </button>
    </div>
    
    );

    

export default Action;