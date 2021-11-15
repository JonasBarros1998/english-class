const database = {
  firebaseDatabase: jest.fn(() => ({
    database: jest.fn(() => Promise.resolve(true)),
  })),
};

export default database;
