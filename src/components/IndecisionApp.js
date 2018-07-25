import React from 'react';
import Option from './Option.js'

import AddOption from './AddOption.js'

import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'




//*********Indecision app mian class************************ */
class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    };
    //class properties (previously event handlers)
    handleDeleteOptions=()=>{     
        this.setState(  ()=>({options:[]})   );
    }

    handleClearSelectedOption=()=>{
        this.setState(()=>({selectedOption:undefined }));
    }
    handleDeleteOption=(optionToRemove)=>{
     
        this.setState((prevState)=>({

            options:prevState.options.filter((option)=>optionToRemove !==option)
        }));
    
    }

    handlePick=()=>{        
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        this.setState(  ()=>({selectedOption:option})   ) ;        
    }
    handleAddOption=(option)=>{
        if(!option){
         return 'Enter valid value to add item';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists';
        }
        else{

        }
 
        this.setState((prevState)=>({  options:prevState.options.concat([option]) } )  );
    }


 //methods*************************************************


    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
             this.setState(()=>({options:options}));
            }
        }
        catch(e){
            //Do nothing at all

        }
       
 
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log("Saving date!");
        }        
    }
    componentWillunmount(){
        console.log("Component will Unmount!"); 
    }

   
    render(){
 
        const subtitle='Put your life in the hands of a computer';
    
        return(
          <div>
          <Header  subtitle={subtitle} />
          <div className="container">
            
          <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}  />
          <div className="widget">
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
 
          <AddOption handleAddOption={this.handleAddOption}/> 
          </div>
        
          </div>
        
          <OptionModal handleClearSelectedOption={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}></OptionModal>         
          </div>

        );
    }
}


export default IndecisionApp;