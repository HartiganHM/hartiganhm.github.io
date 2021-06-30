import React, { useState } from 'react';
import classNames from 'classnames';
import { Document, Page, pdfjs } from 'react-pdf';
import is from 'is_js';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import Loader from '../Loader/Loader';
import copyContent from '../../copy/copyContent';
import svgPaths from '../../copy/svgPaths';

import './About.scss';

const getResumeSize = () => {
  const innerWidth = window.innerWidth;

  if (innerWidth > 700) {
    return 640;
  }

  return innerWidth - 60;
};

const About = () => {
  const [isResumeShown, handleToggleResume] = useState(false);

  const { about } = copyContent;

  const resumeClassNames = classNames({
    resume: true,
    desktop: is.desktop()
  });

  return (
    <div className="About">
      <div className="info-container">
        <div className="top-container">
          <img
            className="profile-image"
            src="/assets/images/Meh-LinkedIn.png"
            alt="Hugh-Hartigan-software-developer"
          />
          <div className="profile-description-container">
            <span className="description-header">{about.header}</span>

            <p className="profile-description">{about.description1}</p>
            <p className="profile-description">{about.description2}</p>
            <p className="profile-description">{about.description3}</p>

            <ul className="questions">
              <li>{about.question1}</li>
              <li>{about.question2}</li>
              <li>{about.question3}</li>
            </ul>
          </div>
        </div>

        <div className="link-wrapper">
          <div className="link-box">
            <button
              onClick={() => {
                document.querySelector('.App').scrollTop = 0;
                handleToggleResume(true);
              }}
              className="icon-wrapper"
            >
              <svg className="icon" viewBox="0 0 512 512">
                <g>
                  <path d={svgPaths.resume} />
                </g>
              </svg>
              <span className="icon-text">{about.iconText1}</span>
            </button>

            <a
              href="https://github.com/HartiganHM"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
            >
              <svg className="icon" viewBox="0 0 436.5 426.8">
                <g>
                  <path d={svgPaths.github} />
                </g>
              </svg>
              <span className="icon-text">{about.iconText2}</span>
            </a>
          </div>

          <div className="link-box">
            <a
              href="mailto:hartigan.hm@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
            >
              <svg className="icon" viewBox="0 0 512 495.1">
                <g>
                  <path d={svgPaths.email} />
                </g>
              </svg>
              <span className="icon-text">{about.iconText3}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hartiganhm/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-wrapper"
            >
              <svg className="icon" viewBox="0 0 512 512">
                <g>
                  <path d={svgPaths.linkedin} />
                </g>
              </svg>
              <span className="icon-text">{about.iconText4}</span>
            </a>
          </div>
        </div>
      </div>

      {isResumeShown && (
        <div className="resume-dialog">
          <a
            className="download-icon"
            href="/assets/images/Hugh-Hartigan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="download-arrow" viewBox="0 0 444.819 444.819">
              <g>
                <path d={svgPaths.download} />
              </g>
            </svg>

            <span className="download-line" />
          </a>

          <div className="close-icon" onClick={() => handleToggleResume(false)}>
            <span className="close-icon-line one" />
            <span className="close-icon-line two" />
          </div>

          <Document
            file="/assets/images/Hugh-Hartigan-Resume.pdf"
            className={resumeClassNames}
            loading={<Loader />}
          >
            <Page pageNumber={1} width={getResumeSize()} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default About;
