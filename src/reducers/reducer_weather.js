// you forget to write FETCH_WEATHER in {} braces.
import {FETCH_WEATHER} from '../actions/index';

//reducer takes 2 argument action and state when action is related to the reducer.
//our state contains list of city so instead of using state=null we use state=[]
//in the argument.
export default function(state=[], action){
  //console.log('Reducer: ',action);
  switch (action.type) {
    case FETCH_WEATHER:
    //THE BIG LESSON HERE IS WE DO NOT MUTATE THE EXISTING STATE
    // RATHER WE PASS THE NEW STATE AS NEW ARRAY
    //the action.payload.data contains all the data we need for the particular
    //city that is searched. So we need to add data to the state which contains
    //previouse city data also. so
      return [action.payload.data, ...state];
  }
  return state;
}
//Big lesson related to state mutation
// in above we should not use state.push(action.payload.data) to add the data of
// new city to existing state. as we always update state using this.setState().
// we never manipulate state directly for eg using state.push().
//so we need to return COMPLETELY NEW PIECE OF STATE. so we return new array which
// contains old stuff of state with new data of new city.
// so 1 way to do is instead of using state.push() we use state.concat([action.payload.data])
//which do not mutate our state but returns new array(i.e. new state)
// or can do like this [action.payload.data, ...state] which is same as using concat.
