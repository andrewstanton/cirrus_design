import React from 'react'
import paragraphs from 'lines-to-paragraphs'

const Content = ({children}) => (
    <div dangerouslySetInnerHTML={{ __html: paragraphs(children) }}></div>
);

export default Content;