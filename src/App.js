import './App.css';
import React, {Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserX from './UserX'
import Artist from './Artist'
import api from './api/metadata.js'

class App extends Component {

  async componentWillMount() {
    await this.loadMetadata()
  }


  constructor(props){
    super(props);
    this.state = {
      tabulator: true,
      metadata: null,
    };
  }

  //retrieveApi(async()=>{
  //  const response = await api.get("/metadata")
  //  return response.data
  //});
  //async retrieveApi(){
   // const response = await api.get("/metadata")
   // console.log(response)
   // return response.data
 // }



  //useEffect=  () => {
  //  const getMetaData = async()=>{
  //    const allData= await api.get("/metadata")
  //    console.log(allData);
  //  }
  //  getMetaData()
  //}
    async loadMetadata(){
      const response = await api.get("/nonfungibletoken")
      this.setState({metadata:response.data})
      console.log(this.state.metadata)
    }

    //<div>
    //{response.map(name => <div>{name}</div>)}
    //</div>






  render() {
    let content
    
    if(this.state.tabulator){
      console.log("hat geklappt")
      content = <UserX metadata={this.state.metadata}/>
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
      <br/>
      <div className="App-body">
        {content}
      </div>

    </div>
    );
    }
}

export default App;
