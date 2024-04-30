export function getUser() {
    const randomUser = createRandomUser();
    const password = 'test1234'; 
  
    return {
        name: randomUser.username,
        email: randomUser.email.toLowerCase(),
        password: password,
        passwordConfirm: password,
    };
  }
  
  export function createRandomUser():User{
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  import { faker } from "@faker-js/faker";

export function tour() {
  return {
    name: faker.lorem.word({ length: { min: 10, max: 40 }}),
    duration: 10,
    description: "Could be",
    maxGroupSize: 10,
    summary: "Test tour",
    difficulty: difficulty(),
    price: 100,
    rating: 4.8,
    imageCover: "tour-3-cover.jpg",
    ratingsAverage: 4.9,
    guides: [],
    startDates: ["2024-04-04"],
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
      description: "Central Park, New York",
      address: "123 Park Ave, New York, NY 10001",
    },
    startLocation: {
      type: "Point",
      coordinates: [-74.005974, 40.712776],
    },
  };
}

function difficulty() {
  const array = ["easy", "medium", "difficult"];
  const index = Math.floor(Math.random() * 3) ;
  return array[index];
}
export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}