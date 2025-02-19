import mongoose from "mongoose"
import bcrypt from "bcryptjs"

export interface IUser extends mongoose.Document {
  email: string
  password: string
  name: string
  plan: "free" | "pro" | "enterprise"
  websites: string[]
  createdAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  plan: {
    type: String,
    enum: ["free", "pro", "enterprise"],
    default: "free",
  },
  websites: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next()

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema)

