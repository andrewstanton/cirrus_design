import React from 'react'
import { Link } from 'gatsby'

const renderItems = (items) => {
    return items.map(item => {
        <div className="banner_slide" style={{ backgroundImage: `url("${ item.image }")` }}>
            <div className="banner_slide_overlay">
                <h1 className="banner_slide_title">{ item.title }</h1>
                <h2 className="banner_slide_subtitle">{ item.subtitle }</h2>
                <p className="banner_slide_text">
                    { item.description }
                </p>
                <Link className="btn btn--default btn--margin-top" to={ item.buttonlink }>
                    { item.buttontext }
                </Link>
            </div>
        </div>
    });
};

const Banner = ({slides}) => (
    <section className="banner">
        {
            renderItems(slides)
        }
    </section>
)

export default Banner