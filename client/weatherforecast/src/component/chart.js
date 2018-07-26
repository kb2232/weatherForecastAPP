import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data)
{
  return _.round(_.sum(data)/(data.length));
}
//temp is in kelvin
//pressure is in hpa (something pascal)
//humidity is a percentage
export default props => {
	return (
		<div>
			<Sparklines height={150} width={200} data={props.data}>
				<SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
			</Sparklines>
      <div>{average(props.data)} {props.units}</div>
		</div>
	);
};
