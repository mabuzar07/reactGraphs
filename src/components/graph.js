import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,Legend, ResponsiveContainer } from 'recharts';
const  GraphComponent = (props) =>{
    return(
        <div className="line-chart-wrapper" style={{ width: '100%', height: '300px'}}>
          <ResponsiveContainer>
          <AreaChart  data={props.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(65, 170, 19, 0.5)" />
                <stop offset="95%" stopColor="rgba(65, 170, 19, 0)" />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
              
            <YAxis />
            <Tooltip iconType="circle"/>
            <CartesianGrid strokeDasharray="3 3" />
            <Legend align="left"  
            wrapperStyle={{
                paddingLeft: "20px"
            }} 
            payload={
                [
                    { id: 'Total Order', value: 'Total Order', type: 'rect', color: '#41aa13'},
                    { id: "Sale's Earning", value: "Sale's Earning", type: 'rect', color: '#ffb917'},
                ]
            }/>
            <Area
              type="monotone"
              dataKey="Total Order"
              stroke="#41aa13"
              strokeWidth="1"
              fillOpacity="1"
              fill="url(#MyGradient)"
              dot
            />
             <Area
              type="monotone"
              dataKey="Sale's Earning"
              stroke="#ffb917"
              fillOpacity="0"
              dot
            />
          </AreaChart>
          
          </ResponsiveContainer>
        </div>
    )
}
export default GraphComponent