
//*********Indecision app mian class************************ */
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);

        this.state={
          options:[]
        };
    }
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

    handleDeleteOptions(){     
        this.setState(  ()=>({options:[]})   );
    }
    handleDeleteOption(optionToRemove){
     
        this.setState((prevState)=>({

            options:prevState.options.filter((option)=>optionToRemove !==option)
        }));
    
    }

    handlePick(){        
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        alert(option);        
    }
    handleAddOption(option){
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
    render(){
 
        const subtitle='Put your life in the hands of a computer';
    
        return(
          <div>
          <Header  subtitle={subtitle} />
          <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}  />
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
 
          <AddOption handleAddOption={this.handleAddOption}/>           
          </div>

        );
    }
}


//*********Header stateless funtional component************************ */

const Header=(props)=>{
return(
    <div>
    <h1>{props.title}</h1>
  {props.subtitle  && <h2>{props.subtitle}</h2>}
    </div>
);

};

Header.defaultProps={
title:'Indecision'
};

//*********Action stateless funtional component************************ */
const Action=(props)=>{
return(
<div>
<button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do? </button>
</div>

);
};

//*********Options  stateless funtional component************************ */
const Options=(props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
       
        {props.options.length===0&& <p>Please add an option to get started</p>}
        {
            
         props.options.map((opt)=>(
             <Option
              key={opt} 
              optionText={opt}
              handleDeleteOption={props.handleDeleteOption}
              /> ) )
     
     }
        
        </div>
    );
    
    };

    //*********Option stateless funtional component************************ */
const Option=(props)=>{
        return(
            <div>                        
                {props.optionText} 
                <button 
                onClick={(e)=>{
                  props.handleDeleteOption(props.optionText)
                }}
                
                >
                Remove 
                </button>                         
            </div>
        );
        
        };

        

    //*********AddOption CLASS  component************************ */
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();//to prevent page reload
     const opt=e.target.elements.opt.value.trim();
     const error=this.props.handleAddOption(opt);
 

     this.setState(()=>({error:error}));

//*************to clear input field after adding  */
     if (!error) {
        e.target.elements.opt.value=``;  
      }
    
    }
    render(){
        return(
        <div>

       {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="opt"></input>
        <button  >Submit</button>
        </form>
        
        </div>
    );
    }
}


///******************RENDERING**************************** */
const appRoot=document.getElementById('app');

ReactDOM.render(<IndecisionApp />,appRoot);