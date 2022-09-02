import React, { useContext } from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { ThemeContext } from '../Context/theme'
import TableScrollbar from 'react-table-scrollbar';

const Transactions = () => {
  const [{theme}] = useContext(ThemeContext);

  return (
    <Col className='col-lg-5 col-md-12 col-sm-12  p-4 shadow' style={{backgroundColor:theme.backgroundColor}}>
      <div>
        <strong>Latest Transactions</strong>
        <hr/>
      </div>
      <div>
        <div style={{overflowY : "scroll"}}>
        {[1,2,3,4,5,6].map((ind)=>(
          <div>
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
            </div>
            <hr/>
          </div>
        ))}
        </div>

      </div>
      <Button className='w-100 btn btn-outline-info'>View All Transactions</Button>

    </Col>
  )
}

export default Transactions