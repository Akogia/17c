import './App.css';
import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserX from './UserX';
import Artist from './Artist';

class App extends Component {



  constructor(props){
    super(props);
    this.state = {
      tabulator: true,
    };
  }

  render() {
    let content
    
    if(this.state.tabulator){
      console.log("hat geklappt")
      content = <UserX/>
    } 
    else {
      content=<Artist/>
    }

    return(
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">17c</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#User" onSelect={(e) =>this.setState({tabulator: true})}>User</Nav.Link>
            <Nav.Link href="#Artist"onSelect={(e) => this.setState({tabulator: false})}>Artist</Nav.Link>
          </Nav>
          <Nav>
            <div className="Address">
                0x4C231E89A53D1c81620f1E2516d4dEEAC27F4a0C
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App-body">
        {content}
      </div>
    </div>
    );
    }
}

export default App;
