import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, Input, InputLabel } from '../StyledComponents.jsx'

const ProductSearch = props => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm = (evt) => {
        setSearchTerm(evt.target.value);
        props.onSearch(evt.target.value)
    }

    return (
      <FormControl>
        <InputLabel>Search by name or description</InputLabel>
        <Input value={searchTerm} onChange={handleSearchTerm} />
      </FormControl>
    )
}

ProductSearch.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default ProductSearch