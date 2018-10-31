const connectDB = (callback) => {
  setTimeout(() => callback(), 2000);
};
const requestQuery = (callback) => {
  setTimeout(() => callback(), 2000);
};
const closeDB = (callback) => {
  setTimeout(() => callback(), 2000);
};

connectDB((err, value) => {
    console.log('Connected to DB');
    requestQuery((err2, value) => {
        console.log('Read the data');
        closeDB((err3, value) => {
            console.log('And we\'re done')
        });
    })
});