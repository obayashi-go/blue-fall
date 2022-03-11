import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";
import CloseIcon from '@mui/icons-material/Close';
import {StaticImage} from "gatsby-plugin-image";


export default function SlideMenu(props) {
    return (
        <>
            <Menu {...props}>
                <Link to="/" className="menu-item" >
                    Home
                </Link>

                <Link to="/cast" className="menu-item" >
                    Cast
                </Link>

                <Link to="/mama" className="menu-item" >
                    Mama 27th Birth day
                </Link>
                <Link to="/license" className="menu-item" >
                    license
                </Link>
                <p className="sleep-ao">
                    <StaticImage src="../../static/img/IMG_3728.JPG" />
                </p>
                <CloseIcon className="menu-close" />
            </Menu>
        </>
    );
};