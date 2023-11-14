import React from "react";
import {BarChart, Bar, ResponsiveContainer} from 'recharts';
const CardComponent = (props) => {
    return (
        <div className="card-box">
                <div className="card_item">
                    <p>{props.data.name}</p>
                        <div className="row">
                            <div className="col-5">
                                <h3>{props.data.value}</h3>
                                <small><i className="fi-arrow-down"></i>{props.data.percentage}</small>
                            </div>
                            <div className="col-7">
                                <div className="bar-chart-wrapper" style={{ width: '100%', height: '60px'}}>
                                    <ResponsiveContainer>
                                        <BarChart   data={props.data.graphData}>
                                            <Bar stackId="0" dataKey="uv" fill={props.data.color}>
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                             </div>
                    </div>
                </div>
        </div>
    )
}
export default CardComponent