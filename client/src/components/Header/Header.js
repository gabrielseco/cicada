// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

import {
  addEventsToDocument,
  removeEventsFromDocument,
  targetIsDescendant
} from './../../utils';
import { Nav, NavItem, DrawerNav } from 'components';
import { withResize } from 'behaviours';

type State = {
  isOpen: boolean,
  event: any
};

type Props = {
  resizeEvent: Event
};

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
      event: undefined
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.event !== prevProps.resizeEvent) {
      this.setState(
        {
          event: prevProps.resizeEvent
        },
        () => this.closeMenu()
      );
    }
    if (!prevState.isOpen && this.state.isOpen) {
      addEventsToDocument(this.getDocumentEvents());
    }
    if (prevState.isOpen && !this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  getDocumentEvents() {
    return {
      click: this.handleDocumentClick.bind(this),
      touchend: this.handleDocumentClick.bind(this)
    };
  }

  handleDocumentClick(event: any) {
    if (
      this.state.isOpen &&
      !targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ isOpen: false });
    }
  }

  onMenuOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <header className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <h2>SpotaRoom</h2>
            </Link>
          </div>
          <div className={styles.drawerContainer}>
            <DrawerNav onClick={() => this.onMenuOpen()} />
          </div>
          <Nav isOpen={this.state.isOpen}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="https://www.bandsintown.com/a/3386497" newTab>
              Tour
            </NavItem>
            <NavItem to="/music">Music</NavItem>
            <NavItem to="https://www.themartingarrixshop.com/" newTab>
              Shop
            </NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="http://stmpd.co/y7dZbVWE" newTab featured>
              ADE 2018
            </NavItem>
          </Nav>
        </div>
      </header>
    );
  }
}

export { Header };

export default withResize(Header);
