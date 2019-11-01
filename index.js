const mongoose = require('mongoose');
const app = require('./app');
const envConfigs =  require('./config/config');
const port = process.env.PORT;

mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';

const config = envConfigs[env];

mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => {
        console.log(`Connect to ${config.url} successfull`)

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => console.log(err));

