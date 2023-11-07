const router = require("express").Router();
const Movie = require("../models/Movie");

const verify = require("../verifyToken");

//Create

router.post("/", verify,  async (req,res) =>{
    if( req.user.isAdmin){
        const newMovie = new Movie(req.body);

        try{

            const savedMovie = await newMovie.save();
            return res.status(201).json(savedMovie);

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json("You not allowed!")
    }
});

//Update

router.put("/:id", verify,  async (req,res) =>{
    if( req.user.isAdmin){
       
        try{

            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set:req.body
            },{new:true});
            return  res.status(200).json(updatedMovie);

        }catch(err){
            //return  res.status(500).json(err);
        }

    }else{
        return  res.status(403).json("You not allowed!")
    }
});

//Delete

router.delete("/:id", verify,  async (req,res) =>{
    if( req.user.isAdmin){
       
        try{

            await Movie.findByIdAndDelete(req.params.id);
            return  res.status(200).json("The Movie has been Deleted!.......");

        }catch(err){
            return   res.status(500).json(err);
        }

    }else{
        return  res.status(403).json("You not allowed!")
    }
});

//Get

router.get("/find/:id", verify,  async (req,res) =>{
   
       
        try{

            const movie =  await Movie.findById(req.params.id);
            return res.status(200).json(movie);

        }catch(err){
             return  res.status(500).json(err);
        }

    }
);

//Random movie

router.get("/random", verify,  async (req,res) =>{
    const type = req.query.type;
    let movie; 
    try{
        if(type=== "series"){
            movie = await Movie.aggregate([
                { $match: {isSeries: true}},
                { $sample: {size:1}},
            ]);
        }else{
            movie=await Movie.aggregate([
                { $match: {isSeries: false}},
                { $sample: {size:1}},
            ]);
        }
        return res.status(200).json(movie);

     

    }catch(err){
       // return res.status(500).json(err);
    }

}
);

//Get all movies

router.get("/", verify,  async (req,res) =>{
    if( req.user.isAdmin){
       
        try{

          const movies =   await Movie.find();
          return  res.status(200).json(movies.reverse());

        }catch(err){
            return  res.status(500).json(err);
        }

    }else{
        return  res.status(403).json("You not allowed!")
    }
});


//Search 

// Add this route for searching movies
router.get("/search",  async (req, res) => {
    try {
      const searchQuery = req.query.query; // Get the search query from the request
      const movies = await Movie.find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive title match
          { genre: { $regex: searchQuery, $options: "i" } }, // Case-insensitive genre match
        ],
      });
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;