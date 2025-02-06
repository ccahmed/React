import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../data/events.json";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (eventName) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.name === eventName && event.nbTickets > 0
          ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
          : event
      )
    );
  };

  const handleLike = (eventName) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.name === eventName ? { ...event, like: !event.like } : event
      )
    );
  };

  return (
    <Container>
      {showWelcome && <Alert variant="info">Hey ! Welcome to Esprit events page !</Alert>}
      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4}>
            <Event event={event} onBook={handleBook} onLike={handleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
