const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const filmRoutes = require('./routes/films');
const hallRoutes = require('./routes/halls');
const seanceRoutes = require('./routes/seances');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/films', filmRoutes);
app.use('/halls', hallRoutes);
app.use('/seances', seanceRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
});
