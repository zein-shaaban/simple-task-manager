const notFound=(req,res)=>{
    res.status(404).send("Sorry Not Found :(");
}
module.exports=notFound;