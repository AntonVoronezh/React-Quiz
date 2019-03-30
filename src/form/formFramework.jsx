export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null){
    if(!validation) {
        return true
    }

    let isValid = true

    if(validation.required) {
        isValid = value !== '' && isValid
    }

    return isValid
}

export function validateForm(formControls) {
    let isFormValid = true



    return isFormValid
}