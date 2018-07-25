class IndecisionApp extends React.Component{

  
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer';
    const options = ['Option One','Option Two','Option Four'];
    return(
    <div>
      <Header title={title} subtitle={subtitle}/>
      <Action/>
      <Options options={options}/>
      <AddOption/>  
    </div>
    );
  }
}


class Header extends React.Component {

  render(){
   
    return (
      <div>
      <h1>{this.props.title}</h1>
      <h2> {this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{

  handlePick(){
    alert('HandlePick');
  }
  render(){

    return (
      <div>
      <button onClick={this.handlePick}>What should be done?</button>
      </div>
    )
  }
}

class Option extends React.Component{

  render(){

    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}
class Options extends React.Component{

  removeAll(){

    alert("RemoveEverything");
  }
  render(){

    return (
      <div>
      <button onClick = {this.removeAll}>Remove All</button>
      {
        this.props.options.map((ele) => <Option key={ele} optionText={ele}/>)
      }
      <Option/>
      </div>
    )
  }

}

class AddOption extends React.Component{

  handleAppOption(e){

    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option)
      alert(option)

  }
  render(){
    return(

      <div>
        <form onSubmit = {this.handleAppOption}>
        <input type="text" name="option" />
        <button>Add Option</button>

        </form>
      </div>
    )
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>,appRoot);