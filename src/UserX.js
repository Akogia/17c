import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react'
import Ticket from './Ticket'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



class UserX extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      setShow: false,
      counter:0,
      ticket: null
    };
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

  render() {

    let ticket
    if(this.state.counter ===0){
      ticket=  <p>claim your ticket</p>
      console.log("ticket gleich null")
    } else if (this.state.counter ===1) {
      ticket = <div><Ticket/></div>
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
      </div>
    )
  }
}

export default UserX;