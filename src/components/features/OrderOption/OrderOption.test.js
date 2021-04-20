import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name={'name'} type={'string'}/>);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render name in title', () => {
    const name = 'name';

    const component = shallow(<OrderOption name={'name'} type={'text'}/>);

    //console.log(component.debug());
    //console.log(component.props());

    expect(component.find('h3').contains(name)).toEqual(true);
  });
});
