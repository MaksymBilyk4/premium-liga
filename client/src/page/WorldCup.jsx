import React from 'react';

import "../assets/css/worldCup.scss";
import WorldCupAnons from "../components/WorldCupAnons";
import translate from "../i18n/translate";

import video from "../assets/video/wc-intro.mp4";
import ukr from "../assets/img/world-cup-countries/ukr.png";
import china from "../assets/img/world-cup-countries/china.png";
import kaz from "../assets/img/world-cup-countries/kaz.png";
import armenia from "../assets/img/world-cup-countries/armenia.png";

const WorldCup = () => {
    const screenWidth = window.screen.width;

    return (
        <>
            <div className="wc-wrapper">
                <WorldCupAnons isMainPage={false}/>

                <section className="regulations">
                    <div className="regulations__video">
                        <video preload="metadata" muted={screenWidth > 600} autoPlay={screenWidth > 600}
                               loop={screenWidth > 600} controls className={"video"} src={video}/>
                    </div>
                    <div className="regulations__content">
                        <div className="regulations__title anons__title">
                            {translate("worldCup.regulations.title")}
                        </div>
                        <ul className="regulations__list">
                            <li key={"reg1"} className="regulations__item">{translate("worldCup.regulations.1")}</li>
                            <li key={"reg2"} className="regulations__item">{translate("worldCup.regulations.2")}</li>
                            <li key={"reg9"} className="regulations__item">{translate("worldCup.regulations.9")}</li>
                            <li key={"reg3"} className="regulations__item">{translate("worldCup.regulations.3")}</li>
                            <li key={"reg4"} className="regulations__item">{translate("worldCup.regulations.4")}</li>
                            <li key={"reg5"} className="regulations__item">{translate("worldCup.regulations.5")}</li>
                            <li key={"reg6"} className="regulations__item">{translate("worldCup.regulations.6")}</li>
                            <li key={"reg7"} className="regulations__item">{translate("worldCup.regulations.7")}</li>
                            <li key={"reg8"} className="regulations__item">{translate("worldCup.regulations.8")}</li>
                        </ul>
                    </div>
                </section>

                <br/>

                <section className="teams__wrap">
                    <div className="teams__title anons__title">{translate("worldCup.groups.title")}</div>
                    <div className="teams">
                        <div className="teams__items">
                            <div className="teams__group">{translate("worldCup.groups.group")} A</div>
                            <div className="teams__team"></div>
                            <div className="teams__team">
                                <img className={"team__image"}
                                     src={ukr} alt="Ukraine"/>
                                Ukraine
                            </div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                            <div className="teams__team">
                                <img className={"team__image"} src={china} alt="China"/>
                                China
                            </div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                        </div>
                        <div className="teams__items">
                            <div className="teams__group">{translate("worldCup.groups.group")} B</div>
                            <div className="teams__team">
                                <img className={"team__image"}
                                     src={armenia} alt="Armenia"/>
                                Armenia
                            </div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                            <div className="teams__team">
                                <img className={"team__image"} src={kaz} alt="Kazakhstan"/>
                                Kazakhstan
                            </div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                            <div className="teams__team"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WorldCup;