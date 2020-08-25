// Require mongoose
const mongoose = require('mongoose')
const { hash, compare } = require('bcryptjs')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10)
  }
})

UserSchema.statics.doesntExist = async function (options) {
  return (await this.where(options).countDocuments()) === 0
}

UserSchema.methods.matchesPassword = function (password) {
  return compare(password, this.password)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
