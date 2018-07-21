console.log("App is running");


var app = {

    title:'Indecision App',
    subtitle:"Put your life in hands of a computer",
    options:['One']
    
}

function getLocation(){

    return 'Unknown'
}
var template  = (

    <div>
        <h1> {app.title}</h1>
        {app.subtitle&&<p> {app.subtitle} </p>} 


        <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
        <ol>
        <li> Item One</li>
        <li> Item Two </li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');


ReactDOM.render(template,appRoot);