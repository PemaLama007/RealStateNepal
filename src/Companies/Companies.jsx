import React from 'react'
import './Companies.css'
function Companies() {
  return (
    <section className='container'>
        <div className='d-flex justify-content-around gap-2 p-3 c-image'>
            <img height="100px" src="./src/assets/prologis.png" alt="" />
            <img height="100px" src="./src/assets/tower.png" alt="" />
            <img height="100px" src="./src/assets/equinix.png" alt="" />
            <img height="100px" src="./src/assets/realty.png" alt="" />

        </div>
    </section>
  )
}

export default Companies