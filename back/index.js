const app = require('./app');

const PORT = 3001

/*
Importar una función que consume la API y el resultado lo pasa a la base de datos. 
finderCreate () / bulkCreate (cada que inicia el Server, se borra y vuelve a cargar data)

Y cambiar las actions para que consulten la BD en lugar de la API
*/

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`);
});