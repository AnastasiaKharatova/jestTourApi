import {User} from "./interface"
import { faker } from "@faker-js/faker";
let password = createRandomeUser().password
export const user = {
    name: createRandomeUser().username,
    email: createRandomeUser().email.toLowerCase(),
    password: password,
    passwordConfirm: password,
}

export function createRandomeUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    }
}
