import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { NumberInput } from '../../common/NumberInput/NumberInput.js';
import { Select } from '../../features/Select/Select';
import { connect } from 'react-redux';
import { getDrugsByOption } from '../../../redux/drugsRedux';
import { getOptionsByProducts } from '../../../redux/optionRedux';
import { addToCart } from '../../../redux/cartRedux';
import styles from './Drugs.module.scss';

const Component = ({ drug, options, className}) => {
  const [value, setValue] = React.useState('female');
  const [amount, setAmount] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const updateTextField = (event) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <Container className={clsx(className, styles.root)}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography component="p">Price {drug.price}$</Typography>
          <Typography component="h1">{drug.option}</Typography>
          <Typography component="p"> {drug.description}</Typography>
          <FormControl component="fieldset"
            className={styles.select}>
            <FormLabel component="legend">{drug.productSelect}</FormLabel>
            <RadioGroup aria-label={drug.productSelect}
              name="select"
              value={value}
              onChange={handleChange}>
              {options.map( option => (
                <FormControlLabel
                  key={option.option}
                  value={option.option}
                  control=
                    {<Radio
                      className={styles.radio}
                      style= {{color: '#584332'}} />}
                  label={option.option} />
              ))}
            </RadioGroup>
          </FormControl>
          <span>Ilość:&nbsp;
            <NumberInput
              value={amount}
              onChange={updateTextField}
            />
          </span>
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => addToCart(drug, amount)}>Add to Card</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select options={options}/>
        </Grid>
      </Grid>
    </Container>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  drug: PropTypes.object,
  options: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state, props) => ({
  drug: getDrugsByOption(state,  props.match.params.id),
  options: getOptionsByProducts(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (drug, amount) => dispatch(addToCart(drug, amount)),
});

const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ContainerComponent as Drugs,
  Component as DrugsComponent,
};
