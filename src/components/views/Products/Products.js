import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getDrugsByCategory } from '../../../redux/drugsRedux.js';
import { getHeaderById } from '../../../redux/categoriesRedux';
import styles from './Products.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const Component = ({ className, children, categoryDrugs, category }) => (
  <Container className={clsx(className, styles.root)}>
    <h2>{category[0].name}!</h2>
    <Divider variant="middle" className={styles.divider} />
    {categoryDrugs.map((drug) => (
      <div key={drug.option}>
        <h3>{drug.name}</h3>
        <NavLink key={drug.option} exact to={`/drug/${drug.option}`}>
          <Card className={styles.Card}>
            <CardMedia
              className={styles.BoardImg}
              component="img"
              image={drug.image}
              option={drug.option}
            />
            <CardContent className={styles.Content}>
              <Typography component="h3">{drug.option}</Typography>
              <Typography component="p" className={styles.description}>
                {drug.description}
              </Typography>
              <Button className={styles.button} variant="outlined" color="primary">See more</Button>
              <Typography component="p">Price from: {drug.price}$</Typography>
            </CardContent>
          </Card>
        </NavLink>
        <Divider variant="middle" className={styles.divider} />
      </div>
    ))}
  </Container>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  categoryDrugs: PropTypes.array,
  category: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  category: getHeaderById(state, props.match.params.id),
  categoryDrugs: getDrugsByCategory(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
  // Component as Products,
  ContainerComponent as Products,
  Component as ProductsComponent,
};
