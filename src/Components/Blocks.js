import React, { useContext } from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { ThemeContext } from '../Context/theme'

const Blocks = () => {
  const [{theme}] = useContext(ThemeContext);
  return (
    <Col className='col-lg-5 col-md-12 col-sm-12 p-4 shadow' style={{backgroundColor:theme.backgroundColor}}>
      <div>
        <strong>Latest Blocks</strong>
        <hr/>
      </div>
      <div style={{overflowY:'scroll'}}>
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
      <Button className='w-100 btn btn-outline-info'>View All Blocks</Button>
    </Col>
  )
}

export default Blocks