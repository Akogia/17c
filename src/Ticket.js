import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'


class Artist extends Component{

  render() {
    return (
      <div>
        <Card className="mb-3s" style={{ width: '60rem', margin: 'auto' }} >
        <Card.Body>
         <Card.Title>Ticket Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Artists</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Artist;