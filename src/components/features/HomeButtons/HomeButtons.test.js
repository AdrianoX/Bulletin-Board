import React from 'react';
import { shallow } from 'enzyme';
import { HomeButtons } from './HomeButtons';
// import { IsoTwoTone } from '@material-ui/icons';
// import { ExpansionPanelActions } from '@material-ui/core';

describe('Test MainPageButtons Component', () => {
  it('should render correctly without errors', () => {
    const component = shallow(<HomeButtons />);
    expect(component).toBeTruthy(); // expect(component).toBeDefined();
  });
});
