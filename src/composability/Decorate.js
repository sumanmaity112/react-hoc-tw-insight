import React from 'react';

const addClass = (classNames = [], className) => {
    classNames.push(className);
    return classNames;
};

export const paintRed = Component => (props) =>
    <Component {...props} classNames={addClass(props.classNames, "red")}/>;

export const withSolidBorder = (Component) => (props) =>
    <Component {...props} classNames={addClass(props.classNames, "solid-border")}/>;
