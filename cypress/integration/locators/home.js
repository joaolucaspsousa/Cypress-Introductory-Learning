const Home_Locators = {
    nameInput: '#firstName',
    surnameInput: '#lastName',
    emailInput: '#email',
    phoneInput: '#phone',

    productSelect: '#product',

    serviceTypeRadio: (numberOption) => `#support-type > :nth-child(${numberOption})`,

    contactMeansCheckbox: (type) => `#check > [for="${type}"`,

    messageTextarea: '#open-text-area',

    attachment: '#file-upload',

    submitButton: '.button',

    messageSuccess: '.success'
}

export default Home_Locators;