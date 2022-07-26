import React from 'react';
import "../assets/css/common.css";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../utils/constants/routes";
import translate from "../i18n/translate";

const NotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle={translate("NotFound.message")}
        extra={
            <Button type="primary">
                <Link to={HOME_ROUTE}>
                    {translate("NotFound.redirect")}
                </Link>
            </Button>}
    />
);

export default NotFound;