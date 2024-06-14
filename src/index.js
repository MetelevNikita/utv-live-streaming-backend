const express = require('express');
const dotenv= require('dotenv').config();
const cors = require('cors');

// module


const loginRouter = require('./Router/loginRouter');


//

const app = express();

// use


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:  true}));

// use routes


app.use('/api/v1', loginRouter);





// work router


app.get('/login', (req, res) => {
  res.sendFile('/login.html');
})

app.get('/create',  (req, res)  =>  {
  res.send('Hello World!');
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