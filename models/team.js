const mongoose = require("mongoose");
 
const TeamSchema = mongoose.Schema({  
  name:{ 
    uz: {type: String, required: true},
    ru: {type: String, required: true}, 
    en: {type: String, required: true},
},
  job: { 
    uz: {type: String, required: true},
    ru: {type: String, required: true},
    en: {type: String, required: true},
   },
  description: {  
    uz: {type: String, required: true},
    ru: {type: String, required: true},
    en: {type: String, required: true},
   },
   tg: { type: String, required: true}, 
   in: { type: String, required: true}, 
   fc: { type: String, required: true}, 
   image: { type: String, required: true}, 
  file: [{ type: String }],
  date: { type: Date, default: Date.now() },
});


module.exports = mongoose.model("Team", TeamSchema);
