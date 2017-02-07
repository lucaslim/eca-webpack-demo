import React from 'react';

export const ProgressiveButton = ({text, clickEvent}) =>
    <button className="button is-info" onClick={clickEvent}>{text}</button>;

export default ProgressiveButton;