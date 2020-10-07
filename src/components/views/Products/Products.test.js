

import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Products';
// import { ExpansionPanelActions } from '@material-ui/core';
// import { IsoTwoTone } from '@material-ui/icons';


describe('Test Items Component', () =>  {
  it('should render correctly without errors', () => {
    const component = shallow(<ProductComponent />);
    expect(component).toBeTruthy();
  });
});


