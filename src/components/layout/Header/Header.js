import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Cart } from '../../features/Cart/Cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import FingerprintIcon from '@material-ui/icons/Fingerprint';
import manageCartStorageHOC from '../../../HOC/manageCartStorage.js/manageCartStorage';
import background from '../../../components/images/666.jpg';


const CartWithStorageMngmt = manageCartStorageHOC(Cart);
// console.log('CartWithStorageMngmt', CartWithStorageMngmt);

const Component = () => {
  return (
    <div className="background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <AppBar
        className={styles.AppBar}
      >
        <Toolbar className={styles.toolbar}>
          <img src="https://i.postimg.cc/FH0pwm9C/333.png" alt="logo" className={styles.logo} />
          {/* <img src="https://i.postimg.cc/q7RDZ96S/dangerous-drug-1.png" alt="logo" className={styles.logo} /> */}

          <Link to="/" className={styles.login}>
            <Typography
              align="center"
              variant="h4"
              className={styles.brand}>
               MyDrugs
            </Typography>
          </Link>
          <CartWithStorageMngmt />
        </Toolbar>
      </AppBar>
    </div>
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
