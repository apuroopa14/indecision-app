import React from 'react';
    
    
    //*********AddOption CLASS  component************************ */
    export default class AddOption extends React.Component{
        state={
            error:undefined
        };
  
        handleAddOption=(e)=>{
            e.preventDefault();//to prevent page reload
     
         const opt=e.target.elements.opt.value.trim();
         const error=this.props.handleAddOption(opt);
     
    
         this.setState(()=>({error:error}));
    
    //*************to clear input field after adding  */
         if (!error) {
            e.target.elements.opt.value=``;  
          }
        
        };
        render(){
            return(
            <div>
    
           {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="opt"></input>
            <button className="button" >Submit</button>
            </form>
            
            </div>
        );
        }
    }

    