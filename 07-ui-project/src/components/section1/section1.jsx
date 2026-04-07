import React from 'react'
import Navbar from './navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Page1Content users={props.users}></Page1Content>
    </div>
  )
}

export default Section1
