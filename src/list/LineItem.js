import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li key={item.id} className="item">
            <input onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" arie-label={`Delete item ${item.id} `}>Delete</FaTrashAlt>

        </li>
    )
}

export default LineItem