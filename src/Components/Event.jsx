import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onLike }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={event.img} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Price: ${event.price}</Card.Text>
        <Card.Text>Tickets: {event.nbTickets}</Card.Text>
        <Card.Text>Participants:{event.nbParticipants}</Card.Text>
        <Button 
          variant="primary" 
          onClick={() => onBook(event.name)}
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an event"}
        </Button>
        <Button variant={event.like ? "danger" : "success"} onClick={() => onLike(event.name)}>
          {event.like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;