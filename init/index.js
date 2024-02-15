const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wonderlust"

main().then(()=>{
    console.log("Connected to DB")
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongo_url);
  
  }

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'65cba64093c49d697fb22614'}));
    await Listing.insertMany(initData.data);
    console.log("Data was saved");
} 

initDB();