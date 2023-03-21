import React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";
import {NAV_ITEMS} from "@/constants/nav-items";
import styles from './Header.module.css';
import UserIcon from "@/components/UserIcon/UserIcon";
import {useRouter} from "next/router";
import { routerHelpers } from "@/helpers/router-helper";

export const Header = () => {
  const router = useRouter();
  
  // Função para renderizar os itens da barra de navegação
  const renderNavItems = () => {
    return NAV_ITEMS.map((item, index) => {
      const isActive = routerHelpers.isActiveRoute({
        path: router.asPath,
        link: item.link
      });
      
      return (
        <Navbar.Link
          hideIn="sm"
          className={styles.items}
          key={index}
          href={item.link}
          isActive={isActive}
        >
          {item.label}
        </Navbar.Link>
      );
    });
  };
  
  // Função para renderizar os itens da barra lateral (mobile)
  const renderCollapseItems = () => {
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
    <Navbar className={styles.header} isCompact variant="static" maxWidth="fluid">
      <Navbar.Brand>
        <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
        <Text b color="inherit" className={styles.logo}>
          BISTRÔ ERNESTRO PELLEGRINI
        </Text>
      </Navbar.Brand>
      <Navbar.Content variant="underline">
        {renderNavItems()}
        <Link className={styles.user} href="/login" > <UserIcon /> </Link>
      </Navbar.Content>
      
      <Navbar.Collapse>
        {renderCollapseItems()}
      </Navbar.Collapse>
    </Navbar>
  );
};
