var express = require('express');

const app = express();


const hospitalRouter = require('./api/hospital/hospital.route');
const PORT = process.env.PORT || 3000;



app.use('/hospital', hospitalRouter);

const nodeEnv = process.env.NODE_ENV || 'development'; 

if (nodeEnv === 'production') {
    corsOptions = {
      'origin': 'http://localhost:3000',
      'optionsSuccessStatus': 200
    };
    console.log('The system is running in production');
  } else {
    console.log('The system is not running in production');
}


app.get('/',function(req,res){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify('Welcome to ForFunMatch!'))
});



app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
});


module.exports=app