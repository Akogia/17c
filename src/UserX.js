import 'bootstrap/dist/css/bootstrap.min.css'
import "react-datepicker/dist/react-datepicker.css"
import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Ticket from './Ticket'
import DatePicker from 'react-datepicker'


class UserX extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      setShow: false,
      counter:0,
      ticket: null,
      nftType:'',
      eventName:'',
      artist:'',
      selectedDate: new Date(),
    };
  }

  handleDate = (event) => {
    this.setState({selectedDate:event})
    console.log(this.state.selectedDate)
  }

  handleEvent = (e) => {
    this.setState({eventName:e.target.value})
    console.log(this.state.eventName)
  }

  //handleArtist = (e) => {
  //  this.setState({setShow:true})
  //  this.setState({show:true})
  //}

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
    console.log(this.state.nftType)
    console.log(this.state.eventName)
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
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="Data from - to, e.g. 06-07-2020 - 08-07-2020" />
        <br />
        <Form.Label>Artist/s</Form.Label>
        <Form.Control type="text" placeholder="Artist, e.g. Rammstein, Billy Talent, Metallica" />
      </Form.Group>
      <br/>
      <div onChange={(e)=>{this.setState({nftType:e.target.value})}}>
      <input type='radio' value='ticket' id='ticket' name='nft'/>
        <label htmlFor='ticket'>Ticket</label>
        <br/>
        <input type='radio' value='picture' id='picture' name='nft'/>
        <label htmlFor='picture'>Picture</label>
      </div>
      <div>
        <p>Select Date for the event</p>
        <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.selectedDate} onChange={this.handleDate} />
      </div>
    </div>
    )
  }
}

export default UserX;