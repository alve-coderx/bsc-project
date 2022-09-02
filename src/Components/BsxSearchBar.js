import React, { useContext } from 'react'
import {ThemeContext} from '../Context/theme'
import { AiOutlineDown} from 'react-icons/ai'
import { NavDropdown } from 'react-bootstrap';
const BsxSearchBar = () => {
  const [{theme,isDark}] = useContext(ThemeContext);
  
  return (
    <div>
         <form style={{ marginRight: 20 }} className="d-flex container-fluid">
                <div className={`rounded-1 d-flex justify-content-around align-items-center ${isDark ? "btn-dark" : "btn-light"}`} style={{width:"100px"}} type="submit">
                <NavDropdown title="All Filters" id="basic-nav-dropdown" className={`${isDark ? "bscDroplight" : "bscDropdark"} `}>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                </div>
                <input
                  style={{backgroundColor : theme.backgroundColor,border:"none"}}
                  className="form-control rounded-0"
                  type="search"
                  placeholder="Search by Address / Txn Hash / Block / Holder"
                  aria-label="Search"
                  size="130"
                />
                <button className="shadow-lg btn rounded-1" type="submit">
                  <i className="fa fa-search color:white"></i>
                </button>
              </form>
    </div>
  )
}

export default BsxSearchBar