import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

export default (req: NextApiRequest, res: NextApiResponse) => {
  
  const usersPerPage = 10;
  const page = parseInt(req.query.page as string) || 1; 

  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const users = [];

  const seed =  page * 100; 
  faker.seed(seed);
  for (let i = startIndex; i < endIndex; i++) {
    if (i >= 0 && i < 50) { 
      const user = {
        userId: i + 1,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        dob: faker.date.between('1980-01-01', '2000-12-31').toISOString().split('T')[0],
        assessmentSubmitted: faker.datatype.boolean(),
        picture: faker.image.url(),
      };
      users.push(user);
    }
  }

  res.status(200).json(users);
};
