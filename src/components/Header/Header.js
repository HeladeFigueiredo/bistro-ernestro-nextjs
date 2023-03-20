import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
export const Header = () => {
  return (
    <Navbar variant="static">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          BISTRÔ
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Quem Somos</Navbar.Link>
        <Navbar.Link href="#">Cardápio</Navbar.Link>
        <Navbar.Link href="#">Eventos</Navbar.Link>
        <Navbar.Link href="#">Reservas</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
