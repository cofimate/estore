import React from 'react';

//import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

//({ children , isGoogleSignIn, inverted, ...otherProps}
const CustomButton = ({ children , ...props}) => (
    <CustomButtonContainer  { ...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;