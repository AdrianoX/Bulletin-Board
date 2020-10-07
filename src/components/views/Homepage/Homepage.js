import React from 'react';
import PropTypes from 'prop-types';
import { HomeButtons } from '../../features/HomeButtons/HomeButtons';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
// import image from '../../images/3.jpeg';
// import image2 from '../../images/2.jpg';
// import image2 from '../../images/7.jpg';
import image2 from '../../images/11.jpg';
import Divider from '@material-ui/core/Divider';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { connect } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';

import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';

const Component = ({className, categories, children}) => (
  <Container className={clsx(className, styles.root)}>
    <Divider variant="middle" className={styles.divider} />
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center">
      {/* <Grid item xs={12} sm={6}>
        <img className={styles.image} src={image} alt="drug"/>
      </Grid> */}
      <Grid item xs={12} sm={12}
        className={styles.TextBox}>
        <img className={styles.image} src={image2} alt="sweets"/>
        <h2 className={styles.Maintext}>Best drugs... <WhatshotIcon className={styles.heart}/></h2>
        {/* <h3 className={styles.Subtext}>Choose yours </h3> */}
      </Grid>
    </Grid>

    <Divider variant="middle" className={styles.divider} />
    <HomeButtons categories={categories}/>
    <Divider variant="middle" className={styles.divider} />

  </Container>

);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  categories: PropTypes.array,
};

const mapStateToProps = state => ({
  categories: getCategories(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  ContainerComponent as Homepage,
  Component as HomepageComponent,
};
