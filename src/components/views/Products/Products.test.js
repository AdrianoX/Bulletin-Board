

import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Products';


describe('Test Items Component', () =>  {
  it('should render correctly without errors', () => {
    const component = shallow(<ProductComponent />);
    expect(component).toBeTruthy();
  });
});


