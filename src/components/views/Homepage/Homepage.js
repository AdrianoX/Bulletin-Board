import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import image1 from '../../images/2.jpg';
import image2 from '../../images/3.jpeg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { Grid } from '@material-ui/core';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';


const Component = ({className}) => (
  <Container className={clsx(className, styles.root)}>
    <Divider variant="middle" />

    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center">
      <Grid item xs={12} sm={5}
        className={styles.InfoHolder}>
        <img className={styles.image} src={image1} alt="pills"/>
        <h2 className={styles.Title}>Only best pills...  <WhatshotIcon className={styles.pillsIcon}/></h2>
        <h3 className={styles.Subtitle}>Check here... </h3>
      </Grid>
      <Grid item xs={12} sm={5}
        className={styles.InfoHolder}>
        <img className={styles.image} src={image2} alt="ecstasy"/>
        <h2 className={styles.Title}>Ecstasy for you... <WhatshotIcon className={styles.pillsIcon}/></h2>
        <h3 className={styles.Subtitle}>Check here... </h3>
      </Grid>
    </Grid>

    <Divider variant="middle" />
  </Container>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
