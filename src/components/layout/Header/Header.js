import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = () => (
  <AppBar className={styles.AppBar}>
    <Toolbar className={styles.toolbar}>
      <Button
        edge="start"
        startIcon={<FingerprintIcon />}
        className={styles.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <Link to="/my-posts" className={styles.login}>
          Mysterious button...

        </Link>
        {<FingerprintIcon />}
      </Button>
      <Link to="/" className={styles.login}>
        <Typography
          align="center"
          variant="h4"
          className={styles.brand}>
          MyDrugs
        </Typography>
      </Link>
      <Button
        className={styles.shop}
        color="inherit"
        startIcon={<AddShoppingCartIcon />}
      >
        <Link to="/client" className={styles.login}>
          Store
        </Link>
      </Button>
    </Toolbar>
  </AppBar>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
