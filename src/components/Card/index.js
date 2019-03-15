import React from 'react'
import PropTypes from 'prop-types'

const classNames = (large, small, horizontal) => {
    const largeClass = large ? `card--large` : '';
    const smallClass = small ? `card--small` : '';
    const horClass = horizontal ? `card--x` : '';
    return `card ${largeClass} ${smallClass} ${horClass}`;
}

const Card = ({large, title, image, subtitle, buttonText, children, small, horizontal}) => (
    <div className={ classNames(large, small, horizontal ) }>
        {
            image && !horizontal ?
            <div className="card_image" style={{ backgroundImage: `url("${ image }")`}}></div> : null
        }

        {
            image && horizontal ?
            <div className="card_image">
                <img src={image} alt="Image"/>
            </div> : null
        }

        <div className="card_content">
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