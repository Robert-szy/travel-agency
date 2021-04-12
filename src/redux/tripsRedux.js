/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    //const pattern = new RegExp(parseInt(filters.duration.to) - parseInt(filters.duration.from), 'i');
    //const pattern = parseInt(filters.duration.to) - parseInt(filters.duration.from);
    //output = output.filter(trips => pattern.test(trips.days));
    //poprzedni kod zostawiony na wzór

    output = output.filter(trip => (trip.days) >= parseInt(filters.duration.from) && (trip.days) <= parseInt(filters.duration.to));
  }

  // TODO - filter by tags
  if(filters.tags){
    let outputtmp = [];
    let outputtag = [];
    if(filters.tags.length!=0){

      for(let tag of filters.tags){
        output = trips;
        //const pattern = new RegExp(filters.tags[tag], 'i');
        //outputtmp = output.filter(trip => pattern.test(trip.tags[tag]));
        //poprzedni kod zostawiony na wzór

        outputtmp = output.filter(trip => trip.tags.indexOf(tag)>=0);
        outputtag = outputtag.concat(outputtmp);
      }

      output = outputtag;
    }

  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter (trip => (trip.id == tripId));


  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter (trip => (trip.country.code == countryCode));


  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
