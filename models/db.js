const mongoose = require("mongoose")



mongoose.connect('make your strig key for to connect with mongodb ')
   .then(()=> console.log('nous sommes connecter avec mongodb !'))
   .catch(()=>console.log("echec de la connexion avec mongodb !"))



module.exports = mongoose.connection