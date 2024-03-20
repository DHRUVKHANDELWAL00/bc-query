const connectDB=require('./db/connect')
const express=require('express');
const app=express();
const routes=require('./routes/index')
const ejs=require('ejs')
const PORT=5000;
require('dotenv').config();
const path=require('path')
app.set('view engine', 'ejs');
app.set('views',"./views")
const bodyParser=require('body-parser')
const BCModel=require('./models/model')
let nearestBCs=[];

// use res.render to load up an ejs view file

// index page

// app.use(express.static("public"))
app.use(express.json())
app.use('/',routes)
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + './public'));



app.get('/', async(req, res)=> {
  nearestBCs = await BCModel.find({});
  //  console.log(typeof nearestBCs)
    console.log(nearestBCs)
    

// // Send formatted data to the client
// res.json(formattedData);


res.render('index',{name:"dhurv",  stuff:nearestBCs
})
});
app.post('/detail', async (req, res) => {
    try {
        // Extract form data from request body
        console.log(req.body)
        const { crop, state, district, pincode } = req.body;

    // Log form data to console
    console.log(`Crop: ${crop}`);
    console.log(`State: ${state}`);
    console.log(`District: ${district}`);
        const pin=parseInt(pincode)

    console.log(`Pincode: ${pin}`);


    // res.json(nearestBCs);
    nearestBCs = await BCModel.find({
    State: state,
    District: district,
});
  //  console.log(typeof nearestBCs)
    console.log(nearestBCs)
    console.log(typeof nearestBCs)
    
    

// // Send formatted data to the client
// res.json(formattedData);

res.render('bc',{
  name:"afterMath",
  stuff:nearestBCs
})
// res.status(200).json({stuff:nearestBCs}); // Pass formatted data

    } catch (error) {
        console.error('Error searching database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/url',(req,res)=>{
  res.render("index",{stuff:nearestBCs})
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();















