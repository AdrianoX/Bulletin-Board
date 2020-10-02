import React from 'react';
import { shallow } from 'enzyme';
import { MainPageButtonsComponent } from './MainPageButtons';
// import { IsoTwoTone } from '@material-ui/icons';
// import { ExpansionPanelActions } from '@material-ui/core';

describe('Test MainPageButtons Component', () => {
  it('should render correctly without errors', () => {
    const component = shallow(<MainPageButtonsComponent />);
    expect(component).toBeTruthy(); // expect(component).toBeDefined();
  });
});
