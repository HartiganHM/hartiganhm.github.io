import React, { useState } from 'react';
import { object } from 'prop-types';
import { Accordion } from '@f-design/component-library';

import './Card.scss';

const Card = ({
  cardData: {
    image,
    title,
    description,
    description2,
    url,
    areaOfFocus,
    areaOfFocus2,
    techStack,
    gitHub,
    liveLink,
  },
}) => {
  const [currentClass, handleToggleDetails] = useState('hidden');

  if (gitHub) {
    return (
      <div className="Card">
        <img
          className="project-image"
          src={`/assets/images/${image}.jpg`}
          alt={image}
        />
        <span className="title-wrapper">
          <h2 className="title">{title}</h2>

          <span
            className="view-details"
            onClick={() =>
              handleToggleDetails(currentClass === 'hidden' ? 'show' : 'hidden')
            }
          >
            {currentClass === 'hidden' ? 'View Details' : 'Hide Details'}
          </span>
        </span>

        <div className={currentClass + ' content-container'}>
          <Accordion title="Description">
            <p className="description">{description}</p>
            {description2 && <p className="description">{description2}</p>}
          </Accordion>

          <Accordion title="Focus">
            <p className="area-of-focus">{areaOfFocus}</p>
            {areaOfFocus2 && <p className="area-of-focus">{areaOfFocus2}</p>}
          </Accordion>

          <div className="tech-stack-box">
            <h3 className="tech-stack-header">Tech Stack</h3>
            <p className="tech-stack">{techStack}</p>
          </div>

          <span className="button-wrapper">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Launch
              </a>
            )}
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <img
          className="blog-image"
          src={`/assets/images/${image}.jpg`}
          alt={image}
        />

        <span className="title-wrapper">
          <h2 className="title">{title}</h2>

          <span
            className="view-details"
            onClick={() =>
              handleToggleDetails(currentClass === 'hidden' ? 'show' : 'hidden')
            }
          >
            {currentClass === 'hidden' ? 'View Details' : 'Hide Details'}
          </span>
        </span>

        <div className={currentClass + ' content-container'}>
          <div className="description-box">
            <h3 className="description-header">Description</h3>

            <p className="description">{description}</p>
          </div>

          <span className="button-wrapper">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read
            </a>
          </span>
        </div>
      </div>
    );
  }
};

export default Card;

Card.propTypes = {
  cardData: object,
};
