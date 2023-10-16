import express from 'express';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import DBConnection from './database/db.js';

const  app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json({ extended : true }));
// app.use('/', router);

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));