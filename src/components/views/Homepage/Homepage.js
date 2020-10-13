
import React from 'react';
import PropTypes from 'prop-types';
import { HomeButtons } from '../../features/HomeButtons/HomeButtons';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import image2 from '../../images/11.jpg';
import Divider from '@material-ui/core/Divider';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/drugsRedux';
import { fetchPublished } from '../../../redux/drugsRedux';
import styles from './Homepage.module.scss';
import { Grid } from '@material-ui/core';

class Component extends React.Component {


  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }
  render() {
    const { className, drugs } = this.props;
    return (
      <Container className={clsx(className, styles.root)}>
        <Divider variant="middle" className={styles.divider} />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {/* <Grid item xs={12} sm={6}>
            <img className={styles.leftImage} src={image} alt="drug" />
          </Grid> */}
          <Grid item xs={12} sm={12} className={styles.TextBox}>
            <img className={styles.image} src={image2} alt="sweets" />
            <h2 className={styles.Maintext}>
              Best drugs ...
              <WhatshotIcon className={styles.heart} />
            </h2>
            {/* <h3 className={styles.Subtext}>Choose yours </h3> */}
          </Grid>
        </Grid>

        <Divider variant="middle" className={styles.divider} />
        <HomeButtons drugs={drugs} />
        <Divider variant="middle" className={styles.divider} />
      </Container>
    );
  }
}

Component.propTypes = {
  drugs: PropTypes.array,
  className: PropTypes.string,
  loadProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  drugs: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(fetchPublished()),
});

const ContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  //Component as Homepage,
  ContainerComponent as Homepage,
  Component as HomepageComponent,
};
