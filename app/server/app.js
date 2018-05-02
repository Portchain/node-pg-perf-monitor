import path from 'path';
import express from 'express';

import router from './router.js';

const app = express();
app.use(express.static(path.join(__dirname, '../public/')));

app.get('*', router);

export default app;