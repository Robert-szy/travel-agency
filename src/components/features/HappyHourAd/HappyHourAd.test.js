import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';


const mockProps = {
  titleValue: 'Nagłówek zegara',
};

const happyProps = {
  title: '.title',
  description: '.countdown',
  titleExpected: 'Nagłówek zegara',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component).toBeTruthy();
  });

  it('contains title and description', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(happyProps.title)).toEqual(true);
    expect(component.exists(happyProps.description)).toEqual(true);
  });

  it('has correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    expect(component.find(happyProps.title).prop('title')).toEqual(happyProps.titleExpected);
  });

});




