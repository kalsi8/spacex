import React from 'react'
import PropTypes from 'prop-types'
import './FilterCard.scss';

function FilterCard({filterName, list, value, onChange}) {
    const onFilterClick = (event) => {
        event.stopPropagation()
        const ds = event.target.dataset
        if (!ds.click) return;
        if(ds.value == value) {
            onChange('')
            return
        }
        onChange(ds.value)
    }
    return (
        <div className={'filter_card'} onClick ={onFilterClick}>
            <div className={'filter_card-label'}>{filterName}</div>
            <div className={'filter_card-items'}>
                {
                    list.map(iValue => {
                        return (
                        <div 
                            className={`${'filter_card-button'} ${iValue == value? 'filter_card-button--active' : ''}`} 
                            data-value={iValue} 
                            data-click={true} 
                            key={iValue}>
                                {iValue}
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

FilterCard.propTypes = {
    filterName: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired, 
    value: PropTypes.any.isRequired, 
    onChange: PropTypes.func.isRequired
}

export default FilterCard

