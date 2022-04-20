import React from "react";
import { CardGroup, Card, Carousel } from "react-bootstrap/";

import "./Projects.css";

function Projects(props) {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <Card className="card-1">
            <Card.Img variant="top" src="https://imgur.com/BZe8rnZ.jpg" />
            <Card.Body>
              <Card.Title>TripMe</Card.Title>
              <Card.Text>
                &bull; A travel planning site, where users can keep track of
                their upcoming vacations, create todo lists, and message their
                travel partners
                <br />
                <br />
                &bull; Created with React, Bootstrap, Python, Django, and SQL
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created Apr 8, 2022</small>
            </Card.Footer>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card-2">
            <Card.Img variant="top" src="https://imgur.com/oIZNszL.jpg" />
            <Card.Body>
              <Card.Title>RAM Electronics</Card.Title>
              <Card.Text>
                &bull; A storefront for an electronics store, built with an
                agile workflow in a team of three
                <br />
                <br />
                &bull; Created with Mongodb, Express, Node, and React
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created Apr 8, 2022</small>
            </Card.Footer>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card-3">
            <Card.Img variant="top" src="https://imgur.com/UoXUkOq.jpg" />
            <Card.Body>
              <Card.Title>DM Helper</Card.Title>
              <Card.Text>
                &bull; A website to create randomized NPCs and monsters to help
                DMs successfully plan their campaigns
                <br />
                <br />
                &bull; Created with React
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created Mar 3, 2022</small>
            </Card.Footer>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card className="card-4">
            <Card.Img variant="top" src="https://imgur.com/zaVbuKc.jpg" />
            <Card.Body>
              <Card.Title>My Tamagotchi</Card.Title>
              <Card.Text>
                &bull; An online game based on a tamagotchi
                <br />
                <br />
                &bull; Created with HTML/CSS and Javascript
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Created Feb 8, 2022</small>
            </Card.Footer>
          </Card>
        </Carousel.Item>
      </Carousel>{" "}
    </main>
  );
}

export default Projects;
