import { faker } from '@faker-js/faker';

const Person = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('#########'),
    product: 'Blog',
    serviceType: 'feedback',
    contactMeans: 'phone',
    message: faker.lorem.sentence()
}

export default Person;