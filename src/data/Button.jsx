import { type } from '@testing-library/user-event/dist/type'
import PropTypes from 'prop-types'
import React from 'react'

function Button({children, type, version, isDisabled}) {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'Primary',
    type : 'button',
    isDisabled: 'false'
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button