import React from 'react';
import NavigationRadio from "../containers/Navigation/Radio/NavigationRadio";
import PropTypes from 'prop-types';
const LayoutRadio = props => {
    const { children, navBarData } = props;
    return (
        <div>
            <NavigationRadio menu={navBarData} />
            {children}
        </div>
    )
}

LayoutRadio.propTypes = {
    children: PropTypes.element,
    navBarData: PropTypes.array
};
export default LayoutRadio
