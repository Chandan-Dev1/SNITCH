import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    email:{type:String,required:true},
    contact:{type:String,required:true},
    password:{type:String,required:true},
    fullNmae:{type:String,required:true},
        role:{
            type:String,
            enum:["buyer","seller"],
            default:"buyer"
        }
    
})

UserSchema.pre("save", async function () {
    if(!this.isModified("password")) return;
    const hash = await bcrypt.hash(this.password,10)
    this.password=hash
})

UserSchema.methods.comparepassword=async function (password) {
    return await bcrypt.compare(password,this.password)
}

const UserModel = mongoose.model("user",UserSchema)

export default UserModel