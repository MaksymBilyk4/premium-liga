import React from 'react';
import {Link} from "react-router-dom";
import translate from "../i18n/translate";
import {DownOutlined} from "@ant-design/icons";
import {scrollToTop} from "../utils/scrollToTop";
import logo from "../assets/img/world-cup-logo-removebg-preview.png";

import start from "../assets/img/world-cup-icons/start.png";
import end from "../assets/img/world-cup-icons/end.png";
import format from "../assets/img/world-cup-icons/format.png";
import gender from "../assets/img/world-cup-icons/gender.png";
import groups from "../assets/img/world-cup-icons/groups.png";

const WorldCupAnons = ({isMainPage}) => {
    return (
        <div className="anons__content_wrap">
            <div className="anons__logo">
                <img src={logo} alt="world-cup-logo"/>
            </div>
            <section className="anons">
                <div className="anons__title_wrap">
                    <div className="anons__title">{translate("worldCup.title")}&nbsp;   </div>
                    <div className="anons__title">&nbsp; {translate("worldCup.info.format.subtitle")}</div>
                </div>

                <div className="anons__infos">
                    <div className="anons__info">
                        <div className="info__label_wrap">
                            <div className="info__label">{translate("worldCup.info.start.title")}</div>
                            <img className="info__image" src={start} alt={"Starts"}/>
                        </div>
                        <div className="info__text">
                            {translate("worldCup.info.start.subtitle")}
                        </div>
                    </div>
                    <div className="anons__info">
                        <div className="info__label_wrap">
                            <div className="info__label">{translate("worldCup.info.end.title")}</div>
                            <img className="info__image" src={end} alt={"Ends"}/>
                        </div>
                        <div className="info__text">
                            {translate("worldCup.info.end.subtitle")}
                        </div>
                    </div>
                    <div className="anons__info">
                        <div className="info__label_wrap">
                            <div className="info__label">{translate("worldCup.info.format.title")}</div>
                            <img src={format} alt={"Format"} className="info__image"/>
                        </div>
                        <div className="info__text">
                            {translate("worldCup.info.format.subtitle")}
                        </div>
                    </div>
                    <div>
                        <div className="info__label_wrap">
                            <div className="info__label">{translate("worldCup.info.gender.title")}</div>
                            <img src={gender} alt={"Gender"} className="info__image"/>
                        </div>
                        <div className="info__text">
                            {translate("worldCup.info.gender.subtitle")}
                        </div>
                    </div>
                    <div>
                        <div className="info__label_wrap">
                            <div className="info__label">{translate("worldCup.info.groups.title")}</div>
                            <img
                                src={groups}
                                alt={"Groups"} className="info__image"/>
                        </div>
                        <div className="info__text">
                            {translate("worldCup.info.groups.subtitle")}
                        </div>
                    </div>
                </div>
                <div className="info__message">
                    <p>{translate("worldCup.info.infoText1")} {translate("buttons.registerNow")}. {translate("worldCup.info.infoText2")}</p>
                    <DownOutlined style={{width: "50px"}}/>
                </div>
                <div className="info__button">
                    <Link onClick={scrollToTop} className={"main_button"} to={ isMainPage ? "/world-cup" : "/contact-us"}>{isMainPage ? translate("main.goToWorldCup") : translate("buttons.registerNow")}</Link>
                </div>
            </section>
        </div>
    );
};

export default WorldCupAnons;