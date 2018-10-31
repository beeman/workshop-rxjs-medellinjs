const connectDB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
};
const requestQuery = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
};
const closeDB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
};

connectDB()
  .then(() => console.log('Connected to DB'))
  .then(() => requestQuery())
  .then(() => console.log('Read the data'))
  .then(() => closeDB())
  .then(() => console.log('And we\'re done'));
