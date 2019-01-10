import React from 'react'
import "../theme.scss";
import "./layout.scss"
const Layout = ({children}) => (
        <div>
            <h1>Header</h1>
                {children}
            <p>the footer</p>
        </div>
   
  )

  export default Layout;
