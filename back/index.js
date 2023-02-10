const app = require('./app');

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});