import React from 'react';
import { shallow } from 'enzyme';
import { ChooseComponent } from './Choose';
// import { ExpansionPanelActions } from '@material-ui/core';
// import { IsoTwoTone } from '@material-ui/icons';


describe('Test Choosen Component', () =>  {
  it('should render correctly without errors', () => {
    const component = shallow(<ChooseComponent />);
    expect(component).toBeTruthy();
  });
});


