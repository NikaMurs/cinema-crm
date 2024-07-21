const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const filmRoutes = require('./routes/films');
const hallRoutes = require('./routes/halls');
const seanceRoutes = require('./routes/seances');
const movieRoutes = require('./routes/movies');
const bookingRoutes = require('./routes/bookings');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/films', filmRoutes);
app.use('/halls', hallRoutes);
app.use('/seances', seanceRoutes);
app.use('/movies', movieRoutes);
app.use('/bookings', bookingRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await sequelize.sync({ force: false });
        console.log('Database synced');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
});
