import React from 'react';
//import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-signup.components';


import './form-input.styles.scss';

const FormInput = ({ handleChange , label , ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} { ...otherProps} />
            {   label ? (
                    <label
                        className={`${
                        otherProps.value.length ?  'shrink' : ''  
                        } form-input-label`}  
                    >
                        {label}
                    </label>    
                    ) 
            : null }
    </div>

);

export default FormInput;