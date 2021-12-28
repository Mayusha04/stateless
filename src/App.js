// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//  class Main extends Component {
//   constructor() {
//     super()
//     this.state = {
//      currentUser: {},
//        gamesAll: [],
//       gamesMostPopular: []
//     }
//   }
//    render() {
//    return (
//       <div>
//         <p>Welcome, {this.state.currentUser}!</p>
//          <AllGames allGames={this.state.gamesAll} />
//          <MostPopular mostPopular={this.state.gamesMostPopular} />
//        </div>
//      )
//   }
//  }
//  export default Component;


import React from 'react';
const college = (props) => {
   return (
      <div>
         <p> My name {props.name} and my course is
         {props.course}</p>
         {props.student}
      </div>
   );
}
export default college;