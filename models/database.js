const pg = require('pg');
const connectionString = "postgres://postgres:1111@localhost:5432/test";

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE items4(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});