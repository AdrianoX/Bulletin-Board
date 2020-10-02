import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPageButtons.module.scss';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
// import Divider from '@material-ui/core/Divider';


const Component = ({ className, divisions }) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center">
      <NavLink exact to={`/items/${divisions[1].id}`} className={styles.mainConnection}>
        <Grid item xs={12} sm={12} className={styles.mainContainer}>
          <img src={divisions[1].image} alt={divisions[1].id} className={styles.mainImageBtn}/>
          <p className={styles.mainImageTxt}>{divisions[1].name}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/items/${divisions[2].id}`} className={styles.secConnection}>
        <Grid item xs={12} sm={12} className={styles.mainContainer}>
          <img src={divisions[2].image} alt={divisions[2].id} className={styles.mainImageBtn}/>
          <p className={styles.mainImageTxt}>{divisions[2].name}</p>
        </Grid>
      </NavLink>
      <NavLink exact to={`/items/${divisions[0].id}`} className={styles.secConnection}>
        <Grid item xs={12} sm={12} className={styles.mainContainer}>
          <img src={divisions[0].image} alt={divisions[0].id} className={styles.mainImageBtn}/>
          <p className={styles.mainImageTxt}>{divisions[0].name}</p>
        </Grid>
      </NavLink>
    </Grid>
  </div>
);


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  divisions: PropTypes.array,
};


export {
  Component as MainPageButtons,
  //Container as MainPageButtons,
  Component as MainPageButtonsComponent,
};
