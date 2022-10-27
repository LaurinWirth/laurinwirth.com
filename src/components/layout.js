import * as React from "react"

import Navbar from "./Navbar"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  
  
    header = (
      <Navbar/>
    )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      <header className="global-header">
      <nav className="navbar1">
            <div className="navbar-item">
                <ul>
                    <li> <a href ="/" className="titleLW">Laurin Wirth</a></li>
                </ul>
               
            </div>
        </nav>
        
        
        {header} </header> 
      <hr className='divider'></hr>
      
      <main>{children}</main>
    
    </div>
  )
}

export default Layout
