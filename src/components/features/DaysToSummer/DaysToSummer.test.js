import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';


const mockProps = {
  descriptionValue: 'days to summer!',
  description1dayValue: 'day to summer!',
  descriptionSummerDays: '',
};

const summerProps = {
  descriptionClass: '.daysDescription',
  daysNumberClass: '.daysNumber',
  descriptionExpected: 'days to summer!',
  description1dayExpected: 'day to summer!',
};


describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component).toBeTruthy();
  });

  it('contains description', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component.exists(summerProps.descriptionClass)).toEqual(true);
  });

  it('has correct description before and after summer', () => {
    const component = shallow(<DaysToSummer {...mockProps}/>);
    expect(component.find(summerProps.descriptionClass).prop('description')).toEqual(summerProps.descriptionExpected);

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


const checkDaysAtTime = (day, expectedDays) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(summerProps.daysNumberClass).text();
    expect(renderedTime).toEqual(expectedDays);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDaysAtTime('2021-01-01', '171');
  checkDaysAtTime('2021-05-10', '42');
  checkDaysAtTime('2021-06-19', '2');
  checkDaysAtTime('2021-09-30', '264');

});

const checkDescriptionAtTime = (day, expectedDescription) => {
  it(`should show correct description at ${day}`, () => {
    global.Date = mockDate(`${day}`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDescription = component.find(summerProps.descriptionClass).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtTime('2021-06-20', 'day to summer!');
  checkDescriptionAtTime('2021-07-20', '');

});

