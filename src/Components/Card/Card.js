import React, { useState } from 'react';
import { object } from 'prop-types';
import { Accordion } from '@f-design/component-library';

import './Card.scss';

const Card = ({
  cardData: {
    image,
    logo,
    title,
    description,
    description2,
    url,
    name,
    areaOfFocus,
    areaOfFocus2,
    techStack,
    gitHub,
    liveLink,
  },
}) => {
  const [isExpanded, handleToggleExpanded] = useState(false);

  const renderNewWindowIcon = () => (
    <span className="material-icons card__new-window-icon">open_in_new</span>
  );

  return (
    <div className="card">
      <div
        className="card__logo-container"
        onClick={() => handleToggleExpanded(!isExpanded)}
      >
        <img className="card__logo" src={`/assets/images/${logo}`} alt={logo} />
      </div>

      <Accordion
        className="card__accordion"
        contentClassName={`card__accordion-content card__accordion-content-${name}`}
        expanded={isExpanded}
        title={title}
      >
        <div className="card__gradient" />

        <img
          className="card__image"
          src={`/assets/images/${image}.jpg`}
          alt={image}
        />

        <span className="card__button-wrapper">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card__button"
            >
              View {renderNewWindowIcon()}
            </a>
          )}
          {gitHub && (
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="card__button"
            >
              GitHub {renderNewWindowIcon()}
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="card__button"
            >
              Read {renderNewWindowIcon()}
            </a>
          )}
        </span>

        <div className="card__content-container">
          <Accordion
            className={`card__accordion card__accordion-nested-${name}`}
            title="Description"
            contentClassName="card__accordion-content"
          >
            <p className="card__content">{description}</p>
            {description2 && <p className="card__content">{description2}</p>}
          </Accordion>

          {areaOfFocus && (
            <Accordion
              className={`card__accordion card__accordion-nested-${name}`}
              title="Focus"
              contentClassName="card__accordion-content"
            >
              <p className="card__content">{areaOfFocus}</p>
              {areaOfFocus2 && <p className="card__content">{areaOfFocus2}</p>}
            </Accordion>
          )}

          {techStack && (
            <Accordion
              className={`card__accordion card__accordion-nested-${name}`}
              title="Tech Stack"
              contentClassName="card__accordion-content"
            >
              <p className="card__content">{techStack}</p>
            </Accordion>
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardData: object,
};
