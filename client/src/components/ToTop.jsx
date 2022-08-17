import {scrollToTop} from "../utils/scrollToTop";
import {ArrowUpOutlined} from "@ant-design/icons";

import "../assets/css/toTop.scss";

const ToTop = () => {

    return(
        <span onClick={scrollToTop} className="arrow_container">
            <ArrowUpOutlined className={"arrow"}/>
        </span>
    )
}

export default ToTop;