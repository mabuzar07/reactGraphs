import React from "react";
const SideBarComponent = () => {
    return (
        <div className="left side-menu">
            <div className="slimscroll-menu" id="remove-scroll">
              
               <div className="topbar-left">
                  <a href="index.html" className="logo">
                  
                  Logo Here
                  </a>
               </div>
               
               <div id="sidebar-menu">
                  <ul className="metismenu" id="side-menu">
                     <li>
                        <a href="#">
                        <i className="mdi mdi-view-dashboard "></i> <span> Dashboard </span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                        <i className="fi-command"></i> <span> Inventory </span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                        <i className="mdi mdi-cart-outline "></i> <span> Open Order </span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                        <i className="mdi mdi-history  "></i> <span> Order History</span>
                        </a>
                     </li>
                  </ul>
               </div>
               
               <div className="clearfix"></div>
            </div>
         </div>
    )
}
export default SideBarComponent