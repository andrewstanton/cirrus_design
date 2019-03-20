import React from 'react'

const renderItems = (items) => {
    return items.map(i => {

    });
};

const Banner = ({image}) => (
    <section className="banner">
        
        <div className="banner_slide" style={{ backgroundImage: `url("${ image }")` }}>
            <div className="banner_slide_overlay">
                <h1 className="banner_slide_title">Quality Design, Done Right The First Time</h1>
                <h2 className="banner_slide_subtitle">Here is another little title that goes another here</h2>
                <p className="banner_slide_text">hkjhdkjfh skdjfh ksjdhfksjhd fkjshd kfjshd kfjhsdkjfhskdjhf ksjdh fksjdh fkjsh dfkjsh dfkjhs ddkfj  hskdhfskdjhf ksjdhf kjsdhfkjshd kfjhs dkfjhs dkjfh skdjhf</p>
                <button className="btn btn--default btn--margin-top">
                    Discover Our 3D Services
                </button>
            </div>
        </div>

    </section>
)

export default Banner