import React from 'react'
import PropTypes from 'prop-types'

const classNames = (large, small) => {
    const largeClass = large ? `card--large` : '';
    const smallClass = small ? `card--small` : '';
    return `card ${largeClass} ${smallClass}`;
}

const Card = ({large, title, image, subtitle, buttonText, children, small}) => (
    <div className={ classNames(large, small ) }>
        
        {
            image ?
            <div className="card_image" style={{ backgroundImage: `url("${ image }")`}}></div> : null
        }

        {
            title ?
            <h3 className="card_title">
                { title }
            </h3> : null
        }

        {
            subtitle ?
            <h4 className="card_subtitle">
                { subtitle }
            </h4> : null
        }

        {
            children ?
            <p className="card_description">
                { children }
            </p> : null
        }

        {
            buttonText ? 
            <button className="btn btn--default">
                { buttonText }
            </button> : null
        }
    </div>
)

Card.propTypes = {
    isLarge: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
}

export default Card