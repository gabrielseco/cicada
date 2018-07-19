// @flow
import React from 'react';
import applyClasses from 'apply-classes';
import styles from './Nav.scss';

type Props = {
  isOpen: boolean,
  children: any
};

type State = {
  collapsing: boolean,
  scrollHeight: number | typeof undefined
};

class Nav extends React.Component<Props, State> {
  navRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsing: false,
      scrollHeight: undefined
    };
    this.navRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.setState(
        {
          collapsing: true
        },
        () => {
          this.setState(prevState => ({
            ...prevState,
            scrollHeight: this.navRef.current.scrollHeight
          }));
        }
      );

      this.navRef.current.addEventListener(
        'transitionend',
        this.navTransitionEnd.bind(this),
        false
      );
    }
  }

  navTransitionEnd() {
    this.setState(prevState => ({
      ...prevState,
      collapsing: false,
      scrollHeight: undefined
    }));
  }

  render() {
    const { isOpen, children } = this.props;
    const { collapsing, scrollHeight } = this.state;
    const classNames = applyClasses({
      [styles.nav]: true,
      [styles.collapse]: isOpen,
      [styles.collapsing]: collapsing
    });
    return (
      <ul
        ref={this.navRef}
        className={classNames}
        style={{ height: scrollHeight }}
      >
        {children}
      </ul>
    );
  }
}

export default Nav;
