import React from 'react';

import "../assets/css/subheader.scss";

import translate from "../i18n/translate";

const Subheader = ({subheaderTheme, title, optionalTitle, optSubheaderTheme}) => {
    return (
        <section className="subheader__container">
            <div className="subheader__content">
                <div className="content__navigation">
                    <a className="content__navigation-link" href="/">{translate("navbar.home")} /
                    </a> <span className="content__navigation-theme">{optSubheaderTheme}  {subheaderTheme}</span>
                </div>

                <div className="subheader__title">
                    <h2>{title} {optionalTitle}</h2>
                </div>
            </div>
        </section>

    );
};

export default Subheader;