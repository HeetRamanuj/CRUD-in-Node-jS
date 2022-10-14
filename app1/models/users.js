const mongoose = require('mongoose')
mongoose.pluralize(null)

const userSchema = mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    phone : {
        type : Number
    }
})

const userModel = mongoose.model("user_master" , userSchema)
module.exports = userModel