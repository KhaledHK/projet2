import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import k from'../images/k.webp'
import { Link } from 'react-router-dom'
const NavBar = ({search}) => {
const onSearch=(tit)=>{
search(tit)
    }

  return (
    
<div className='nav-style w-100'>
    <Container>
      <Row className='pt-2'>
         <Col xs="2" lg="1">
            <a href="/">
            <img className='logo' src={k} alt="rene"/>
            </a>
         </Col>
         <Col xs="10" lg="11" className="d-flex align-items-center" >
           <div className='search w-100'>
             <i className='fa fa-search'></i>
             <input type='text' className='form-control' placeholder='search' onChange={(e)=>onSearch(e.target.value)}/>

           </div>

         </Col>
      </Row>

    </Container>
</div>

    
  )
}

export default NavBar
