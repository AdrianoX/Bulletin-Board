import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Header.module.scss';

const Component = () => (
  // <div className={clsx(className, styles.root)}>
  <AppBar className={styles.AppBar}>
    <Toolbar className={styles.toolbar}>
      <Button edge="start" startIcon= {<FingerprintIcon />} className={styles.menuButton} color="inherit" aria-label="shopping_cart">
        <Link to = '/drugs-info'
          className={styles.login}>
                Welcome stranger ...
        </Link>
      </Button>
      <Typography
        align='center'
        variant='h3'
        className={styles.main_title}>

        MyDrugs

      </Typography>
      <Button className={styles.shop} color="inherit" startIcon= {<ShoppingCartIcon />}>
        <Link
          to="/store_card"
          className={styles.login}
        > Store
        </Link>
      </Button>
    </Toolbar>
  </AppBar>
  // </div>
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
