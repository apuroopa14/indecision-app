class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state= {
           title:'Visibility Toggle',
           visibility:false
        };

    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
     
            return{
                visibility: ! prevState.visibility           
            };
        });


    }

render(){
    return(
        <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility? 'Show details': 'Hide Details' }</button>
        <p>{this.state.visibility ? 'Hey.These are some details you can now see!' : '' }</p>
        </div>
);

}


}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

//JSX WAY*******************************************************************************************************************
// const app={
// title:'Visibility Toggle'
// };

// let visibility=false;

// const toggle=()=>{

// visibility=!visibility;
// renderApp();
// };

// const appRoot=document.getElementById("app");

// const renderApp=()=>{


// const template=(
// <div>
// <h1>{app.title}</h1>
// <button onClick={toggle} id="tog">{visibility ? 'Hide Details' : 'Show Details' }</button>
// <p>{visibility ? 'Hey.These are some details you can now see!' : '' }</p>
// </div>
// );

// ReactDOM.render(template,appRoot)
// };

// renderApp();