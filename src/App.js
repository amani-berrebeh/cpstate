import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  state = {
    person: {
      fullName: "Unicorne",
      bio: "hello from the sky",
      imgSrc: "unicorne.jpg",
      profession: "coucou world",
    },
    shows: true,
  };
   toggle = () => { this.setState({shows:!this.state.shows}) }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.shows ? 'hide':'show'}
          </button>
          { this.state.shows ?
        <div>
          <h1>Full Name:{this.state.person.fullName} </h1>
          <h2>Full Name:{this.state.person.bio} </h2>
<img src={this.state.person.imgSrc} alt="unicorne" />
          <h2>Full Name:{this.state.person.profession} </h2>
        </div>:<Counter/>
  }
      </div>
    );
  }
}

export default App;
