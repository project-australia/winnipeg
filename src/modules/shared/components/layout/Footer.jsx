import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ballardLogo from "../../../../assets/images/ballard-logo-horizontal.svg";
import { ROUTES } from "../../../router";

import "./styles/Header.css";

const FooterContainer = () => {
  return (
    <Menu className="navBar" padded="true" stackable>
      {/* TODO: Esse link nao ta funcionando */}
      <Menu.Header>
        <Link to={ROUTES.HOME}>
          <img className="appLogo" src={ballardLogo} height={46} alt="logo" />
        </Link>
      </Menu.Header>
      <Menu.Menu position="right">
        <Menu.Item>
          <a className="socialMediaButton">
            <Icon name="facebook" size="large" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="socialMediaButton">
            <Icon name="twitter" size="large" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="socialMediaButton">
            <Icon name="youtube" size="large" />
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export const Footer = FooterContainer;
