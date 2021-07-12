/* eslint-disable no-empty-pattern */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Avatar } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='/test'>Test Management</Nav.Link>
          <Nav.Link href='/test'>Courses Management</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant='outline-success'>Search</Button>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
