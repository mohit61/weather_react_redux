//we made this as component not a container because this component has nothing to
//do with the state of the app as we get the required data in the form of props.
//so no need to access the redux and so no need to make it a container.
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
// _ is lodash and we use it here to use its sum and round function which is required
// to find average value.
import _ from 'lodash';

//remember do not put it inside the main function.
function average(data){
    return(
      //round function is used to get round off
      _.round(_.sum(data)/data.length)
    );
}

//remembet this is a props and we pass data like this. and use props.something.
// u can name it simply props also instead of value.
export default (value) => {
  return(
    <div>
      <Sparklines width={180} height={120} data={value.data}>
        <SparklinesLine color={value.color}/>
        <SparklinesReferenceLine type="mean"/>
      </Sparklines>
      <div>{average(value.data)} {value.unit}</div>
    </div>
  );
}
