import React from 'react'
import { Link } from 'gatsby'

const renderItems = (slides) => {
    return slides.map((slide, ix) => {
        const slideClass = ix == 0 ? `banner_slide active` : 'banner_slide';
        return (
        <div className={ slideClass }
            key={ ix }
            style={{ backgroundImage: `url("${ slide.image }")` }}>
            <div className="banner_slide_overlay">
                <h1 className="banner_slide_title">{ slide.title }</h1>
                <h2 className="banner_slide_subtitle">{ slide.subtitle }</h2>
                <p className="banner_slide_text">
                    { slide.description }
                </p>
                <Link className="btn btn--default btn--margin-top" to={ slide.buttonlink }>
                    { slide.buttontext }
                </Link>
            </div>
        </div>
        )
    });
};

const Banner = ({slides}) => {
    const slider = require('../../scripts/slider');
    return (
        <section className="banner">
            {
                renderItems(slides)
            }
        </section>
    )
}

export default Banner