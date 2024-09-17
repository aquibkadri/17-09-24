const express  = require('express');

const app = express();

const TOKEN = 'ADMIN';

const checkToken = (token) => token === TOKEN ? true : false;

app.use((req, res, next) => {
    const isAuthorized = checkToken(req.query.token);
    if(isAuthorized) {
        next();
    } else { 
        res.statusCode = 401;
        res.send("User is Unauthorized!")
    }
});
app.get('/add', (req, res) => {
    const query = req.query;
    const no1 = query.no1.trim();
    const no2 = query.no2.trim();
    console.log(query)
    if(no1 && no2) {
        res.statusCode = 200
        res.send(`Result is ${parseInt(no1) + parseInt(no2)}`);
    } else {
        res.statusCode = 400;
        res.send(`Both numbes are required!`)
    }
})

app.listen(3000, () => {
 console.log('App is listening')
})