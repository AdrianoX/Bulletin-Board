import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
// import { Cart } from '../../features/Cart/Cart';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import manageCartStorageHOC from '../../../HOC/manageCartStorage.js/manageCartStorage';


import FingerprintIcon from '@material-ui/icons/Fingerprint';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// const CartWithStorageMngmt = manageCartStorageHOC(Cart);

const Component = () => {
  return (
    <AppBar className={styles.AppBar}>
      <Toolbar className={styles.toolbar}>
        <Button
          edge="start"
          startIcon={<FingerprintIcon />}
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/" className={styles.login}>
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
        {/* <CartWithStorageMngmt /> */}
      </Toolbar>
    </AppBar>
  );
};

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
