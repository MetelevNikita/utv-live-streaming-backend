const express = require('express');
const dotenv= require('dotenv').config();
const cors = require('cors');
const path = require('path');

// module


const loginRouter = require('./Router/loginRouter');

//

const app = express();


const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

// use


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:  true}));
app.use(express.static(publicPath));

// use routes


app.use('/api/v1', loginRouter);





// work router


app.get('/login', (req, res) => {
  res.sendFile(publicPath + '/html/login.html');
})

app.get('/create',  (req, res)  =>  {
    res.sendFile(publicPath + '/html/main.html');
})

app.get('/', (req, res) => {
  res.redirect('/login');
})

app.get('/*',  (req, res)  =>  {
  res.sendFile(publicPath + '/html/404.html');
})


// listen


const PORT = process.env.PORT || 8000;
const startServer = () => {

  try {
     app.listen(PORT, () => {console.log(`Сервер стартовал с порта: ${PORT}`);});
  } catch (error) {
    console.log(error)
  }
}


startServer()