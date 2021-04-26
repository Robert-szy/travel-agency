import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';


const mockProps = {
  titleValue: 'Nagłówek zegara',
  descriptionValue: 'Happy hour time',
};

const happyProps = {
  title: '.title',
  description: '.countdown',
  countdown: '.promoDescription',
  titleExpected: 'Nagłówek zegara',
  descriptionExpected: 'Happy hour time',
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

  it('has correct title and description', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    //expect(component.find(happyProps.title).prop('title')).toEqual(happyProps.titleExpected);
    expect(component.find(happyProps.description).prop('description')).toEqual(happyProps.descriptionExpected);

  });

});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};



const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(happyProps.countdown).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});


