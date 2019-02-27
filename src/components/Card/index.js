import React from 'react'
import PropTypes from 'prop-types'

const Card = ({data}) => (
    <div className={ data.isLarge ? `card card--large` : `card` }>
        <div className="card-imageWrapper">
            { data.image }
        </div>
        <h3 className="card-title">
            { data.title }
        </h3>
        <h4 className="card-subtitle">
            { data.subtitle }
        </h4>
        <p>
            { data.description }
        </p>
        <button className="btn">
            { buttonText }
        </button>
    </div>
)

Card.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            isLarge: PropTypes.bool,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            img: PropTypes.string,
            description: PropTypes.string.isRequired,
            buttonText: PropTypes.string,
        })
    ),
}

export default Card