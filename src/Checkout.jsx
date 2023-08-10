import useStepper from "./hooks/useStepper";
import BillingForm from "./checkout/BillingForm";
import CreditCardForm from "./checkout/CreditCardForm";
import ShippingForm from "./checkout/ShippingForm";

function Checkout() {
    const { step, increment, decrement } = useStepper();

    const style = {
        marginLeft: '20px',
        marginRight: '20px',
        padding: '10px'
    }

    const plusButton = {
        marginRight: '5px'
    }

    const minusButton = {
        marginLeft: '5px'
    }

    if(step === 0) {
        return (
            <div style={style}>
                <h1>Checkout</h1>
                <h3>step#: {step}</h3>
                <button style={plusButton} onClick={increment}>+</button>
                <button style={minusButton} onClick={decrement}>-</button>
                <BillingForm/>
            </div>
        )
    }

    if(step === 1) {
        return (
            <div style={style}>
                <h1>Checkout</h1>
                <h3>step#: {step}</h3>
                <button style={plusButton} onClick={increment}>+</button>
                <button style={minusButton}onClick={decrement}>-</button>
                <CreditCardForm/>
            </div>
        )
    }

    if(step === 2) {
        return (
            <div style={style}>
                <h1>Checkout</h1>
                <h3>step#: {step}</h3>
                <button style={plusButton} onClick={increment}>+</button>
                <button style={minusButton} onClick={decrement}>-</button>
                <ShippingForm/>
            </div>
        )
    }

    return(
        <></>
    )
}

export default Checkout;