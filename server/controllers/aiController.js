const aiSolution = require("../model/aiSolution");

const getAllAiSolution = async (req,res,next)=>{
    let aiSolutions;
    try{
        aiSolutions = await aiSolution.find();
    }catch(err){
        console.log(err)
    }
    if(!aiSolutions){
        return res.status(404).json({message:"No Product Found"})

    }
    return res.status(200).json({aiSolutions})
}

const addAiSolution = async (req, res) => {
  const { name, email, phoneNumber, companyName, jobTitle, jobDetails, country } = req.body;

 
  if (!phoneNumber || typeof phoneNumber !== 'string') {
      return res.status(400).json({ message: 'Phone number is required and must be a string' });
  }

  let aiSolutions;
  try {
      aiSolutions = new aiSolution({
          name,
          email,
          phoneNumber,  
          companyName,
          jobTitle,
          jobDetails,
          country
      });
      await aiSolutions.save();
  } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Unable to add AI solution" });
  }

  if (!aiSolutions) {
      return res.status(500).json({ message: "Unable to add AI solution" });
  }
  return res.status(201).json({ aiSolutions });
};


const deleteById = async (req, res) => {
  const id = req.params.id; // Extract ID from request parameters
  let product;

  try {
     
      product = await Product.findByIdAndDelete(id);
  } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error occurred while deleting the product" });
  }

  if (!product) {
      return res.status(404).json({ message: "Unable to delete, product not found" });
  }

  return res.status(200).json({ message: "Product successfully deleted" });
};




exports.getAllAiSolution= getAllAiSolution;
exports.addAiSolution = addAiSolution
exports.deleteById=deleteById