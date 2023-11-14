import React from 'react';

const HeaderComponent = () => {
    return (
        <div className="topbar">
        <nav className="navbar-custom">
           <ul className="list-unstyled topbar-right-menu float-right mb-0">
              <li className="dropdown notification-list bell-icon">
                 <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button"
                    aria-haspopup="false" aria-expanded="false">
                 <i className="fi-bell noti-icon"></i>
                 <span className="badge badge-danger badge-pill noti-icon-badge"></span>
                 </a>
              </li>
              <li className="dropdown notification-list">
                 <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
                    aria-haspopup="false" aria-expanded="false">
                  <span className="ml-1">John Doe <i className="mdi mdi-chevron-down"></i> </span><img src={require("../images/avatar.png")} alt="user" className="rounded-circle" />
                 </a>
                 
              </li>
           </ul>
          
           <ul className="list-inline menu-left mb-0">
              <li className="float-left">
                 <button className="button-menu-mobile open-left disable-btn">
                 <i className="dripicons-menu"></i>
                 </button>
              </li>
              <li>
                 <div className="page-title-box">
                    <div className="d-flex align-items-center store-title">
                        <div className="store-image"><span>SN</span></div>
                        <h4 className="page-title">Store Name </h4>
                    </div>
                 </div>
              </li>
           </ul>
        </nav>
     </div>
    )
}
export default HeaderComponent