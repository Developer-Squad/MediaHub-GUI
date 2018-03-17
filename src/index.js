import React from 'react';
import ReactDOM from 'react-dom';

var a = <h1>ronak doshi</h1>;
ReactDOM.render(a,document.getElementById('root'));

// anything inside {} is plane javascript -------------------------------------------------------
var b= 2+3;
ReactDOM.render(
	<h1>b and {b}</h1>,
	document.getElementById('root')
);


// events -----------------------------------------------------------------------------------------
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  if('alt' != 'doggy')
  {
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
  }
  else{
  	e.target.setAttribute('src','https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg');
  	e.target.setAttribute('alt','kitty');
  }

}

const kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty,document.getElementById('root'));

//Conditions ------------------------------------------------------------------------------------------------

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = (
    <img src={pics.kitty} />
  );
} else {
  img = ( 
    <img src={pics.doggy} />
  );
}

ReactDOM.render(img, document.getElementById('app'));

// Or by ternary operator
const xyz = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	xyz, 
	document.getElementById('app')
);


//Lists ---------------------------------------------------------------------------------------------------------
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);



// Class --------------------------------------------------------------------------------------------

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
  	return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    ); 
  }
};

ReactDOM.render(<Owl />, document.getElementById('app'));

// Putting logic in render function

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render(){
    var friend = friends[0];
    return (
    	<div>
        <h1>{friend.title}</h1>
        <img src = {friend.src} />
      </div>
      
    );
  }
};

ReactDOM.render(<Friend /> , document.getElementById('app'));


// Different methods in a class

class MyName extends React.Component {
   	get name(){
   		  return 'whatever-your-name-is-goes-here';
  	}

  	render() {
    	return <h1>My name is {this.name}.</h1>;
  	}
}

ReactDOM.render(<MyName />, document.getElementById('app')); 



// Event Listerner Components

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button /> , document.getElementById('app'));


// Props ----------------------------------------------------------------------------------------------------------

// Components Props----------------------------------------------------------------------
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Ronak' />, 
  document.getElementById('app')
);



//Passing props from one component to another

//Button.js
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk} >
        Click me!
      </button>
    );
  }
}

// They are two different files and we are importing button.js in Talker.js and sending function as a prop in Button

//Talker.js
class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk = {this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);



// Children props-----------------------------------------------------


//List.js
export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}


//App.js  which has imported List.js in it

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);




// State ---------------------------------------------------------------------------------------------------------


class App extends React.Component {
	// constructor method begins here:
	constructor(props){
    super(props);
    this.state = {title : 'Best App'};
  };
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));


//Changing value of state

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {color : green};
    this.changeColor = this.changeColor.bind(this);
  };
  changeColor(){
    var a = this.state.color == green ? yellow : green ;
    this.setState({color : a});
  }
  render() {
    return (
      <div style={{background : this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

//Note: You cant call this.state() from inside the render