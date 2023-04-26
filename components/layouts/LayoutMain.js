import React from 'react';
import NavigationMain from "../containers/Navigation/Main/NavigationMain";
import PropTypes from 'prop-types';
import NavigationRadioFooter from '../containers/Navigation/Radio/NavigationRadioFooter';
const LayoutMain = props => {
    const { children, navBarData } = props;
    return (
        <div>
            <NavigationMain menu={navBarData} />
            {children}
            <NavigationRadioFooter />
        </div>
    )
}

LayoutMain.propTypes = {
    children: PropTypes.element,
    navBarData: PropTypes.array
};
export default LayoutMain
