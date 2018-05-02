import path from 'path';
import express from 'express';

import router from './router.js';

const app = express();
console.log('EXPRESS APP STARTED')
app.use(express.static(path.join(__dirname, '../')));

app.get('*', router);

export default app;