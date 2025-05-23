
function Button({ buttonType, isDisabled, onClick, buttonText }) {
    return (
        <button
            type={buttonType}
            disabled={isDisabled}
            onClick={onClick}
        >{buttonText}</button>
    )
}

export default Button;