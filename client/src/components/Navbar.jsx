import React, {useCallback, useContext} from 'react';

import "../assets/css/common.css";
import "../assets/css/navbar.scss";

import {Button, Menu, Popover, Row} from "antd";
import {Link} from "react-router-dom";
import {
    ArrowDownOutlined,
    FireOutlined,
    GlobalOutlined,
    HomeOutlined,
    MailOutlined,
    TeamOutlined,
    TrophyOutlined
} from "@ant-design/icons";
import translate from "../i18n/translate";
import {AppContext} from "../Context/index";
import {LOCALES} from "../i18n/index";


const Navbar = () => {
    const {SubMenu} = Menu;

    const {state, dispatch} = useContext(AppContext);

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: "setLocale",
            locale
        })
    }, []);

    const popoverLangItems = (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Button onClick={() => setLanguage(LOCALES.ENGLISH)}
                    disabled={state.locale.ENGLISH}>EN</Button>
            <Button onClick={() => setLanguage(LOCALES.RUSSIAN)}
                    disabled={state.locale.RUSSIAN}>RU</Button>
            <Button onClick={() => setLanguage(LOCALES.SPANISH)}
                    disabled={state.locale.SPANISH}>ES</Button>
        </div>
    );


    return (
        <div className="wrapper">
            <Row justify="end">
                <Menu
                    className="header-navbar"
                    mode="horizontal" selectable={false}
                >

                    <Menu.Item className="menu-item" key="home" icon={<HomeOutlined/>}>
                        <Link to={'/'}>{translate("navbar.home")}</Link>
                    </Menu.Item>

                    <Menu.Item className="menu-item" key="world-cup" icon={<GlobalOutlined />}>
                        <Link to={'/world-cup'}>{translate("navbar.worldCup")}</Link>
                    </Menu.Item>

                    <Menu.Item className="menu-item" key="matches" icon={<FireOutlined />}>
                        <Link to={'/matches'}>{translate("navbar.matches")}</Link>
                    </Menu.Item>
                    <SubMenu key="tournaments" icon={<TrophyOutlined/>} title={translate("navbar.leagues.tournaments")}>
                        <Menu.ItemGroup title={translate("navbar.leagues.tournaments")}>
                            <Menu.Item key={"all__leagues"}>
                                <Link to={'/leagues'}>{translate("navbar.leagues.allTournaments")}</Link>
                            </Menu.Item>

                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="members" icon={<TeamOutlined />} title={translate("navbar.members.members")}>
                        <Menu.ItemGroup title={translate("navbar.members.tournamentMembers")}>
                            <Menu.Item key="teams"><Link to={'/teams'}>{translate("navbar.members.teams")}</Link></Menu.Item>
                            <Menu.Item key="players"><Link to={'/players'}>{translate("navbar.members.players")}</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item className="menu-item" key="contacts" icon={<MailOutlined />} title={"ContactUs"} >
                        <Link to={'/contacts'}>{translate("navbar.contact")}</Link>
                    </Menu.Item>
                    <Menu.Item className="menu-item">
                        <Popover content={popoverLangItems} title={translate("navbar.lang")}>
                            <Button>{state.locale.toUpperCase()} <ArrowDownOutlined/></Button>
                        </Popover>
                    </Menu.Item>

                </Menu>
            </Row>

        </div>
    );
};

export default Navbar;