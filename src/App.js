import React from 'react';
import GraphComponent from './components/graph';
import SideBarComponent from './components/sideBarComponent';
import HeaderComponent from './components/headerComponent';
import ContentComponent from './components/contentComponent';

function App() {

  const data = [
    {
      "data" : [
        { id : 1,  name: 'Jan', "Total Order": 6000, "Sale's Earning": 5000  },
        { id : 2, name: 'Feb', "Total Order": 5000, "Sale's Earning": 5500 },
        { id : 3, name: 'Mar', "Total Order": 7000, "Sale's Earning": 4300  },
        { id : 4, name: 'Apr', "Total Order": 4080, "Sale's Earning": 6400  },
        { id : 5,  name: 'May', "Total Order": 6090, "Sale's Earning": 4000 },
        { name: 'Jun', "Total Order": 4390, "Sale's Earning": 5000 }
        ],
        name : "1 month",
        value : "1m"
    },
    {
      "data" : [
        { id : 1,  name: 'Jan', "Total Order": 6000, "Sale's Earning": 5000  },
        { id : 2, name: 'Feb', "Total Order": 5000, "Sale's Earning": 5500 },
        { id : 3, name: 'Mar', "Total Order": 7000, "Sale's Earning": 4300  },
        { id : 4, name: 'Apr', "Total Order": 4080, "Sale's Earning": 6400  },
        { id : 5,  name: 'May', "Total Order": 6090, "Sale's Earning": 4000 },
        { name: 'Jun', "Total Order": 4390, "Sale's Earning": 5000 }
        ],
        name : "3 months",
        value : "3m"
    },
    {
        "data" : [
          { id : 1,  name: 'Jan', "Total Order": 8000, "Sale's Earning": 5000  },
          { id : 2, name: 'Feb', "Total Order": 5000, "Sale's Earning": 5000 },
          { id : 3, name: 'Mar', "Total Order": 3000, "Sale's Earning": 4000  },
          { id : 4, name: 'Apr', "Total Order": 4080, "Sale's Earning": 6400  },
          { id : 5,  name: 'May', "Total Order": 6090, "Sale's Earning": 4000 },
          { name: 'Jun', "Total Order": 4390, "Sale's Earning": 5000 }
        ],
        name : "6 months",
        value : "6m"
    },
    {
          "data" : [
            { id : 1,  name: 'Jan', "Total Order": 5000, "Sale's Earning": 5000  },
            { id : 2, name: 'Feb', "Total Order": 7000, "Sale's Earning": 5500 },
            { id : 3, name: 'Mar', "Total Order": 5000, "Sale's Earning": 3300  },
            { id : 4, name: 'Apr', "Total Order": 4080, "Sale's Earning": 6400  },
            { id : 5,  name: 'May', "Total Order": 6090, "Sale's Earning": 5000 },
            { name: 'Jun', "Total Order": 4390, "Sale's Earning": 5000 }
          ],
          name : "9 months",
          value : "9m"
    },
    {
          "data" : [
            { id : 1,  name: 'Jan', "Total Order": 6000, "Sale's Earning": 7000  },
            { id : 2, name: 'Feb', "Total Order": 5000, "Sale's Earning": 5500 },
            { id : 3, name: 'Mar', "Total Order": 6000, "Sale's Earning": 5300  },
            { id : 4, name: 'Apr', "Total Order": 4080, "Sale's Earning": 6400  },
            { id : 5,  name: 'May', "Total Order": 5090, "Sale's Earning": 7000 },
            { name: 'Jun', "Total Order": 4390, "Sale's Earning": 5000 }
            ],
            name : "12 months",
            value : "12m"
    },

  ];
  const accountData = [
    {id : 1 , name : "Total Order", value : "246k" , percentage : "13.8%", color : "#41aa13" ,graphData : [
      { name: 'Jan', uv: 1500 },
      { name: 'Feb', uv: 3300 },
      { name: 'Mar', uv: 3200 },
      { name: 'Apr', uv: 2800 },
    ] },
    {id : 2 , name : "Sale Earning", value : "2453" , percentage : "13.8%", color : "#ffb917", graphData : [
      { name: 'Jan', uv: 1500 },
      { name: 'Feb', uv: 3300 },
      { name: 'Mar', uv: 3200 },
      { name: 'Apr', uv: 2800 },
    ] },
    {id : 3 , name : "Item Sold", value : "233k" , percentage : "13.8%", color : "#5f5e6c", graphData : [
      { name: 'Jan', uv: 1500 },
      { name: 'Feb', uv: 3300 },
      { name: 'Mar', uv: 3200 },
      { name: 'Apr', uv: 2800 },
    ] },
  ];
  const months = [
    {id : 1, name : "1 month", value: "1m"},
    {id : 2, name : "3 months", value: "3m"},
    {id : 3, name : "6 months", value: "6m"},
    {id : 4, name : "9 months", value: "9m"},
    {id : 5, name : "12 months", value: "12m"},
  ];
  const [graphData, onChangeGraphData ] = React.useState(data[0]);
  const [graphMonth, onChangeMonth] = React.useState("1 month");
  const changeGraphData = (e,val) => {
    e.preventDefault()
    let graphData = [...data];
    let month = months.find(x => x.id == val);
    if(month){
      onChangeMonth(month.name)
    }
    if(graphData && graphData.length > 0){
      let graph = graphData.find(x => x.value == month.value)
      if(graph){
        onChangeGraphData(graph)
      }
      
    }
  }
  return (
    <div id="wrapper">
      <SideBarComponent />
      <div className="content-page">
        <div className="topbar-wrapper">
          <HeaderComponent />
        </div>
        <div className="content-wrapper">
          <ContentComponent graphData={graphData} accountData={accountData} months={months} graphMonth={graphMonth} fun={changeGraphData} />
        </div>
      </div>
    
    </div>
  );
}

export default App;
