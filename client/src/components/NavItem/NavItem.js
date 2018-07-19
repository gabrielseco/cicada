// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import applyClasses from 'apply-classes';
import styles from './NavItem.scss';

const NavItem = ({
  children,
  newTab,
  featured,
  to
}: {
  children: string,
  newTab: boolean,
  featured: boolean,
  to: string
}) => {
  const targetProps =
    newTab === true
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : undefined;
  const navLinkClassName =
    featured === true
      ? {
          [styles.navLink]: true,
          [styles.navLinkFeatured]: true
        }
      : {
          [styles.navLink]: true
        };
  const LinkComponent =
    newTab === true ? (
      <a className={applyClasses(navLinkClassName)} href={to} {...targetProps}>
        {children}
      </a>
    ) : (
      <Link className={applyClasses(navLinkClassName)} to={to} {...targetProps}>
        {children}
      </Link>
    );
  return <li className={styles.navItem}>{LinkComponent}</li>;
};

export default NavItem;
