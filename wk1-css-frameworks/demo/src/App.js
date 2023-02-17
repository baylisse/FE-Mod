import React from "react";
import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Dropdown from 'react-bootstrap/Dropdown';

import "./styles.css";
/*
FYI! 
first install the library:
npm install react-bootstrap bootstrap
(install _both_ react-bootstrap (the react components) and bootstrap (the css styles))
and add the css styles to the project (index.html)

then import each component as you render it

it's not necessary that you use every component here, but here's a bunch of good examples.

For each component, showcase how you can customize the component via props and utilize `className` to further customize the component.
(this is to drive home the point that we'll typically be using a combination of both a Component and classnames)
*/

function App() {
  return (
    <>
      <Container>
        <h1>hello, world</h1>
        <Stack gap={3}>
          <div className="bg-light border">First item</div>
          <div className="bg-light border">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>
        {/*i'm using bootstrap styles (mt-4 for margin-top) on a regular html element */}
        <p className='mt-4'>goodbye, world</p>
        {/*even though this is a horizontal stack, I still had to target it with 
        a custom className and display: flex; in styles.css to make it appear 
        horizontally because of competing stylesheets - Bootstrap can be hard to work with! */}
        <Stack className='horizontalPlz mt-4' direction="horizontal" gap={3}>
          <div className="bg-light border">First item</div>
          {/** ms if for margin-start (aka left)*/}
          <div className="bg-light border ms-auto">Second item</div>
          <div className="bg-light border">Third item</div>
        </Stack>
      </Container>
      <Container className='mt-4'>
        <p>another container</p>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </>
  );
}

export { App };
