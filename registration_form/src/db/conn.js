const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/registered_data',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("connection was not succeful due to: ",e);
})