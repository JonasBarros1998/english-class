const database = {
  firebaseDatabase: jest.fn(() => ({
    database: jest.fn(() => Promise.resolve(true)),
  })),

  firebaseAuth: jest.fn(() => ({
    auth: jest.fn(() => Promise.resolve(true)),
  })),
};

export default database;
