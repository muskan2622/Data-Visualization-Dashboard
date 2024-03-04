import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a target="_blank" rel="noopener noreferrer">
          Made By Muskan for Black coffer
        </a>
        <span className="ms-1"></span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
