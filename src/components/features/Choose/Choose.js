import React from 'react';
import PropTypes from 'prop-types';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';    <--- CL !?

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styles from '.Choose.module.scss';


class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      // slides: [
      //   (<img src={imageOne} />),
      //   (<img src={imageTwo} />),
      //   (<img src={imageThree} />),
      // ],
      // thumbnails: [
      //   (<img src={thumbnailOne} />),
      //   (<img src={thumbnailTwo} />),
      //   (<img src={thumbnailThree} />),
      // ],
    };
    // this.onchange = this.onchange.bind(this);
  }
   static propTypes = {
     className: PropTypes.string,
     options: PropTypes.array,
   };

  onChange = value => this.setState({ value });


  render() {
    const {options} = this.props;
    const {value} = this.state;
    return (
      <div className={ styles.root}>
        {/* <Carousel plugins={['arrows']}> */}
        <Carousel
          slidesPerPage={1}
          slidesPerScroll={1}
          animationSpeed={2300}
          clickToChange
          centered
          value={value}
          onChange={this.onChange}
          className={styles.Carousel}
        >
          <img className="img-example-small" src={options[value].image} alt={options[value].option} />
        </Carousel>
        {/* <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} /> */}
        <Dots
          value={value}
          onChange={this.onChange}
          className={styles.thumbnails}
          thumbnails={[
            (<img key={1} className={styles.thumbNailsImg} src={options[0].image} alt={options[0].option} />),
            (<img key={2} className={styles.thumbNailsImg} src={options[1].image} alt={options[1].option} />),
            (<img key={3} className={styles.thumbNailsImg} src={options[2].image} alt={options[2].option} />),
          ]}
        />

      </div>
    );
  }
}

export {
  Component as Choose,
  //Container as Choose,
  Component as ChooseComponent,
};
