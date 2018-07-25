console.log("app.js is runni");
//JSX - JavaScript XML
const app={
    title:"Indecision App",
    subtitle:"Put your life in the hands of a computer",
    options:[]
};


//function for adding option
const onFormSubmit=(e)=>{
e.preventDefault();
const option=e.target.elements.option.value;
if(option){
    app.options.push(option);
    e.target.elements.option.value='';
    renderApp();   
}

};
//Remove all function
const RemoveAll=()=>{
    app.options.length=0;
    renderApp();
};
//Make decision function
const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option);


};
//constants
const appRoot=document.getElementById("app");
const numbers=[55,101,1000];

//render app function

const renderApp=()=>{
const template =(
<div>
    <h1>{app.title}</h1>
    {(app.subtitle) && <p>{app.subtitle}</p>}
  <p> {(app.options.length>0) ? 'Here are your options':'No options' } </p>
 <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
  <button onClick={RemoveAll}>Remove All</button>

    <ol> {
    app.options.map((op)=> <li key={op}>{op}</li>)
}
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"  >
    
    </input>
    <button>Add Option</button>
    </form>
</div>
);
ReactDOM.render(template,appRoot)
};


//calling render app
renderApp();





