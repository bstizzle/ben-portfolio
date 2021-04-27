const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
      email: "benji@gmail.com",
      name: "Ben Stein",
      username: "Benji13",
      info: "Hello I am a developer",
      password: "benjibenji",
      role: 'admin'
    },
    {
      _id: user2Id,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
      email: "test@gmail.com",
      name: "test user",
      username: "test13",
      info: "Hello I am a test",
      password: "testtest"
    }
  ],
  portfolios: [
    {
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: user1Id
    },
    {
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: user1Id
    },
    {
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
      user: user1Id
    }
  ]
}

module.exports = data;