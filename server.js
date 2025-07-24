const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const coursesRoutes = require('./routes/courses');
const supportRoutes = require('./routes/support');
const jobsRoutes = require('./routes/jobs');
const toolsRoutes = require('./routes/tools');

app.use('/api/courses', coursesRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/tools', toolsRoutes);

app.get('/', (req, res) => {
  res.send('Zwanski Tech API - Backend is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
