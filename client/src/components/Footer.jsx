import React from 'react';
import {Link} from "react-router-dom";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import translate from "../i18n/translate";
import {scrollToTop} from "../utils/scrollToTop";
import mainLogo from "../assets/img/premium-liga-logo.jpg";

import "../assets/css/footer.scss";

const Footer = () => {
    return (
        <>
            <section className="footer__section">
                <div className="footer__container">
                    <div className="footer__content">
                        <div className="footer__title">
                            <h2>{translate("footer.info.followUs")}</h2>
                        </div>

                        <div className="footer__socialmedia">
                            <div className="socialmedia__link">
                                <a className="instagram__link link"
                                   href="https://www.instagram.com/premiumligabcn/?utm_medium=copy_link"
                                   target="_blank"><InstagramOutlined/></a>
                            </div>
                            <div className="socialmedia__link">
                                <a className="youtube__link link"
                                   href="https://www.youtube.com/channel/UCvUqDs20265nmo5SGq-JErA/videos"
                                   target="_blank"><YoutubeOutlined/></a>
                            </div>
                            <div className="socialmedia__link">
                                <a className="facebook__link link"
                                   href="https://www.facebook.com/profile.php?id=100079542447626"
                                   target="_blank"><FacebookOutlined/></a>
                            </div>
                        </div>

                        <div className="footer__info">
                            <div className="footer__info__title">
                                <h4>{translate("footer.info.leagueLinks.title")}</h4>
                            </div>

                            <ul className="footer__list">
                                <li><Link className="list__item" onClick={scrollToTop}
                                          to="/world-cup">&#8226; {translate("footer.info.leagueLinks.worldCup")}</Link></li>
                                <li><Link className="list__item" onClick={scrollToTop}
                                          to="/matches">&#8226; {translate("footer.info.leagueLinks.results")}</Link></li>
                                <li><Link className="list__item" onClick={scrollToTop}
                                          to="/leagues">&#8226; {translate("footer.info.leagueLinks.tournaments")}</Link></li>
                                <li><Link className="list__item" onClick={scrollToTop}
                                          to="/players">&#8226; {translate("footer.info.leagueLinks.players")}</Link></li>
                                <li><Link className="list__item" onClick={scrollToTop}
                                          to="/contact-us">&#8226; {translate("footer.info.leagueLinks.contacts")}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main__footer">
                <div className="footer__wrapper">

                    <div className="footer__logo">
                        <img src={mainLogo} alt="Premium Liga logo"/>
                    </div>

                    <div className="footer__navigation">
                        <Link to="/" onClick={scrollToTop}
                              className="navigation__link">{translate("footer.main.home")}</Link>
                        <Link to={'/world-cup'} onClick={scrollToTop}
                              className="navigation__link">{translate("footer.info.leagueLinks.worldCup")}</Link>
                        <Link to="/matches" onClick={scrollToTop}
                              className="navigation__link">{translate("footer.main.matches")}</Link>
                        <Link to="/leagues" onClick={scrollToTop}
                              className="navigation__link">{translate("footer.info.leagueLinks.tournaments")}</Link>
                        <Link to="/teams" onClick={scrollToTop}
                              className="navigation__link">{translate("footer.main.members")}</Link>
                        <Link to="/contact-us" onClick={scrollToTop}
                              className="navigation__link">{translate("footer.info.leagueLinks.contacts")}</Link>
                    </div>

                    <div className="footer__copyright">
                        <h4>
                            Copyright &#169; Premium Liga 2021-2022
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;