
import React from 'react'

export const TextField = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="col-sm-2 col-form-label">{props.title}</label>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}