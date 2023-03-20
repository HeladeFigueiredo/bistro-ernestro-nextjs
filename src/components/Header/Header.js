import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import {NAV_ITEMS} from "@/constants/nav-items";
import styles from './Header.module.css';

export const Header = () => {
  
  // Função para renderizar os itens da barra de navegação
  const renderNavItems = () => {
    return NAV_ITEMS.map((item, index) => {
      return (
        <Navbar.Link key={index} href={item.link}>{item.label}</Navbar.Link>
      );
    });
  };
  
  // Função para renderizar os itens da barra lateral (mobile)
  const renderCollpaseItems = () => {
    return NAV_ITEMS.map((item, index) => {
      return (
        <Navbar.CollapseItem key={index}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href={item.link}
          >
            {item.label}
          </Link>
        </Navbar.CollapseItem>
      );
    });
  };
  
  return (
    <Navbar className={styles.header} isCompact variant="static">
      <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Text b color="inherit">
          BISTRÔ
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        {renderNavItems()}
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
      
      <Navbar.Collapse>
        {renderCollpaseItems()}
      </Navbar.Collapse>
    </Navbar>
  );
};
