import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Heading = () => {
  return (
    <div>
      <Navbar color='dark'>
        <Container>
          <NavbarBrand href='/'>Home</NavbarBrand>
          <Nav>
            <NavItem>
              <Link to='/add' className='btn btn-primary'>
                Add User
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
