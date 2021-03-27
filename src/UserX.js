import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Ticket from './Ticket'
import Uuid from 'react-uuid'
import DatePicker from 'react-datepicker'


class UserX extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      setShow: false,
      counter:0,
      ticket: null,
      nftType: 'ticket',
      metadata:{
        id: null,
        name: '',
        URL:'',
        attribute:{
          ticket:true,
          video:false,
          eventdate: new Date(),
          artist:[]
        }
      }

    };
  }

  handleDate = (event) => {
    this.setState({eventdate:event})
    console.log(this.state.eventdate)
  }

  handleEvent = (e) => {
    this.setState({metadata:{name:e.target.value}})
    console.log(this.state.name)
  }

  handleArtist = (e) => {
    let str = e.target.value
    console.log(str)
    let artistArray = str.split(', ')
    console.log(artistArray)
    //this.setState({artist:[...this.state.artist, artistArray]})
    this.setState({artist:artistArray})
  }

  handleShow = () => {
    this.setState({setShow:true})
    this.setState({show:true})
    console.log("handeShow")
  }
  handleClose = () => {
    this.setState({setShow:true})
    this.setState({show:false})
    console.log("handeShow")
  }

  addTicket = () => {
    let counter = this.state.counter
    console.log(counter)
    counter += 1
    this.setState({counter})
    this.setState({setShow:true})
    this.setState({show:false})
    //return (<div><div><Ticket/></div><br/></div>)
  }

  selectedOption = (e) => {
    this.setState({nftType: e.target.value})
    console.log(this.state.nftType)
    if(e.target.value ==='ticket'){
      this.setState({ticket:true})
      this.setState({video:false})
    }else{
      this.setState({ticket:false})
      this.setState({video:true})
    }
  }

  handlePost= ()=>{
    let number = Uuid()
    console.log(number)
    this.setState({id: number})
    console.log(this.state.id)
    console.log(this.state.eventdate)
    console.log(this.state.artist)
    console.log(this.state.name)
    console.log(this.state.nftType)
    console.log(this.state.video)
    console.log(this.state.ticket)
    console.log(this.state.metadata)
    //const response = await api.put("/nonfungibletoken")
    //this.sendMetadata(this.state.metadataNFT)
  }

  //async sendMetadata(metadataNFT){
  //  const response = await api.post("/nonfungibletoken/${metadataNFT.id}", metadataNFT)
  //  console.log(this.state.metadata)
  //  console.log(response)
  //}




  render() {
    //let ticket
    //if(this.state.counter ===0){
    //  ticket = <p>claim your ticket</p>
    //} else {
    //  while(this.state.counter <=10){
    //  
    //    let counter = this.state.counter
    //    const oneTicket = <div><Ticket/></div>
    //    ticket = counter*oneTicket
    //  }
    //}

    let ticket
    if(this.state.counter ===0){
      ticket=  <p>claim your ticket</p>
      console.log("ticket gleich null")
    } else if (this.state.counter ===1) {
      ticket = <div><Ticket/></div>
      console.log(this.state.nftType)
    }else if (this.state.counter ===2) {
      ticket = <div><div><Ticket/></div><br/><div><Ticket/></div></div>
    }

    return (
      <div className="Btnabstand">
      <Button size="lg" onClick={this.handleShow}>
        Claim Ticket
      </Button>
      <div id="ticket">


      </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>17c</Modal.Title>
      </Modal.Header>
        <Form>
          <Form.Group controlId="TicketAddress">
          <Form.Label>Ticket Address</Form.Label>
          <Form.Control type="addresss" placeholder="Enter Code" />
          <Form.Text className="text-muted">
          Add the received ticket code to claim the NFT.
          </Form.Text>
          </Form.Group>
        </Form>
      <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={this.addTicket}>
        Save Changes
      </Button>
      </Modal.Footer>
      </Modal>
      <br/>
      <div className="addTicket">
        {ticket}
      </div>
      <br/>
      <Form.Group>
        <Form.Label>Name of the event</Form.Label>
        <Form.Control type="text" placeholder="Event Name here" onChange={this.handleEvent}/>
        <br />
        <Form.Label>Artist/s</Form.Label>
        <Form.Control type="text" placeholder="Artist, e.g. Rammstein, Billy Talent, Metallica" onChange={this.handleArtist}/>
      </Form.Group>
      <br/>
      <div>
      <input type='radio' value='ticket' name='nft' checked={this.state.nftType === 'ticket'} onChange = {this.selectedOption}/>
        <label htmlFor='ticket'>Ticket</label>
        <br/>
        <input type='radio' value='picture' name='nft' checked={this.state.nftType === 'picture'} onChange = {this.selectedOption} />
        <label htmlFor='picture'>Picture</label>
      </div>
      <div>
        <p>Select Date for the event</p>
        <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.eventdate} onChange={this.handleDate} />
      </div>
      <br/>
      <Button size="lg" onClick={this.handlePost} >Submit</Button>
    </div>
    )
  }
}

export default UserX;