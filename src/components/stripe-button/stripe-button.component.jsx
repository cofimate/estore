import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Igex1J3PFGZGCBqQgLGv64w7GfubkcDATghVY0H346l1jn7ygQ67dM22yRwPqjBQ1awuZIPTv1VmgTo7zk7Uva300LYxEAGDC';

    const onToken  = token => {
        console.log(token);
        alert('Payment Succesfull');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Cec Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
