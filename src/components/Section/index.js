import React from "react";
import Content from "../Content";

const classNames = (theme, leftImage, full) => {
  const themeClass = theme ? `section--${theme}` : "";
  const imageAlign = leftImage ? `section--leftImage` : "section--rightImage";
  const fullClass = full ? `section--full` : "";
  return `section ${themeClass} ${imageAlign} ${fullClass}`;
};

const Section = ({
  children,
  theme,
  image,
  leftImage,
  title,
  subtitle,
  full,
}) => (
  <section className={classNames(theme, leftImage, full)}>
    <div className="wrapper section_wrapper">
      {image ? (
        <div className="section_image">
          <img src={image} className="section_image" />
        </div>
      ) : null}

      <div className="section_content">
        <h1 className="section_title">{title}</h1>
        <h2 className="section_subtitle">{subtitle}</h2>

        <Content>{children}</Content>
      </div>
    </div>
  </section>
);

export default Section;
