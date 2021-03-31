import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-datepicker/dist/react-datepicker.css'
import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Uuid from 'react-uuid'
import api from './api/metadata.js'


class Artist extends Component{

  constructor(props){
    super(props);
    this.state={
      nftType: 'ticket',
      eventdate: new Date(),
      name: '',
      artist: [],
      ticket:true,
      video:false,
      id:''
    }
  }

  handleDate = (event) => {
    this.setState({eventdate:event})
    console.log(this.state.eventdate)
  }

  handleEvent = (e) => {
    this.setState({name:e.target.value})
    console.log(this.state.name)
  }

  handleArtist = (e) => {
    let str = e.target.value
    console.log(str)
    let artistArray = str.split(', ')
    console.log(artistArray)
    //this.setState({artist:[...this.state.artist, artistArray]})
    this.setState({artist:artistArray})
    console.log(this.state.artist)
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
    console.log(this.props.metadata)
    //const response = await api.put("/nonfungibletoken")
    //this.sendMetadata(this.state.metadataNFT)
    const newMetadata = {'id':this.state.id,
                        'name':this.state.name,
                        'URL': '',
                        'attributes':{
                          'artist': this.state.artist,
                          'date': this.state.eventdate,
                          'ticket': this.state.ticket,
                          'video': this.state.video
                        }
                        }
    console.log(newMetadata)
    this.props.metadata.push(newMetadata)
    console.log(this.props.metadata)
    this.sendMetadata(newMetadata)

  }

async sendMetadata(newMetadata){
    //let newtype = this.props.metadata
    const response = await api.post("/nonfungibletoken/", newMetadata)
    console.log(this.props.metadata)
    console.log(response)
  }


  render() {
    return (
      <div>
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

export default Artist;