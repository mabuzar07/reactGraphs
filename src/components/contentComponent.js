import React from"react";
import GraphComponent from "./graph";
import CardComponent from "./cardComponent";

const ContentComponent = (props) => {
    return(
        <div className="content">
        <div className="container-fluid">
           <div className="row">
              <h4 className="header-title mb-4">Overview</h4>
              
                  {props.accountData && props.accountData.length > 0 ?
                  props.accountData.map( (a,i)=>{
                      return <div className="col-xs-12 col-4" key={i}>
                      <CardComponent  data={a} />
                      </div>
                  } )
                :""}
           </div>
           
           <div className="row">
             <div className="col-xs-12 col-12">
                 <div className="card-box">
                     <div className="d-flex justify-content-between">
                        <h4>Statistics</h4>
                        <div className="nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-outline-secondary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    {props.graphMonth}
                                </a>
                                <div className="dropdown-menu">
                                    {props.months && props.months.length > 0 ?
                                    props.months.map( (m,i) => {
                                        return (
                                        <a key={i}  className="dropdown-item" onClick={(e) => props.fun(e,m.id)}>{m.name}</a>
                                        )
                                    }) : ""}
                                
                                </div>
                            </li>
                        </div>
                     </div>
                     
                     <GraphComponent data={props.graphData.data}  />
                 </div>
             </div>
           </div>
        </div>
       
     </div>
    )
}
export default ContentComponent