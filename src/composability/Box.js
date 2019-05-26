import React from 'react';
import styles from "./Box.css"
import classNames from 'classnames/bind';
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Box = ({classNames}) => (
    <div className={cx("default-background", "box", ...classNames)}/>
);

Box.propTypes = {
    classNames: PropTypes.array,
};

Box.defaultProps = {
    classNames: []
};

export default Box;