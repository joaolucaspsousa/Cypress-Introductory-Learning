const Home_Locators = {
    nameInput: '#firstName',
    surnameInput: '#lastName',
    emailInput: '#email',
    phoneInput: '#phone',

    productSelect: '#product',

    serviceTypeRadio: (option) => `input[type="radio"][value="${option}"]`,

    contactMeansCheckbox: (type) => `#check > [for="${type}"`,

    messageTextarea: '#open-text-area',

    attachment: '#file-upload',

    submitButton: '.button',

    messageSuccess: '.success',
    messageFailure: '.error',

    linkPrivacyPolicy: '#privacy a'
}

export default Home_Locators;