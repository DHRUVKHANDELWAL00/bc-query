const BCModel=require('../models/model')
const getAllItems=async(req,res)=>{

  try {
    const data = await BCModel.find({});

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    console.log(data[0])
    res.json(data);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports={
    getAllItems,
}