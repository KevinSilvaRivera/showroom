const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mysql = require('mysql');
const port = 3000; // Puerto en el que escuchará el servidor
app.use(bodyParser.urlencoded({ extended: true }));

// Define una ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola desde Express!');
});
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
  });

// Configura el servidor para escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productos'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

db.query(`
    CREATE TABLE IF NOT EXISTS productos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        descripcion TEXT,
        imagen VARCHAR(255),
        precio DECIMAL(10, 2)
    )`, (err) => {
        if (err) {
            console.error('Error al crear la tabla de productos: ' + err);
        } else {
            console.log('Tabla de productos creada con éxito');
        }
    });

    app.post('/agregar-producto', (req, res) => {
        const nombre = req.body['product-name'];
        const descripcion = req.body['product-description'];
        const imagen = req.body['product-image'];
        const precio = req.body['product-price'];
    
        const sql = 'INSERT INTO productos (nombre, descripcion, imagen, precio) VALUES (?, ?, ?, ?)';
        db.query(sql, [nombre, descripcion, imagen, precio], (err, result) => {
            if (err) {
                console.error('Error al agregar producto: ' + err);
            } else {
                console.log('Producto agregado con éxito');
            }
        });
    });
    app.get('/mostrar-productos', (req, res) => {
        const sql = 'SELECT * FROM productos';
        db.query(sql, (err, rows) => {
            if (err) {
                console.error('Error al recuperar productos: ' + err);
            } else {
                res.send(rows);
            }
        });
    }); 