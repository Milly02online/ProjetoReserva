import { Schema, model } from 'mongoose'

const HouseSchema = new Schema({
  thumbnail: String,
  descipyion: String,
  price: Number,
  location: String,
  status: Boolean, //s está ativo, por exm.
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  ToJSON: {
    virtuals: true
  }
})

HouseSchema.virtual('thumbnail_url').get(function() {
  return `https://localhost:4000/files/${this.thumbnail}`
})

// `` = variavel

export default model('House', HouseSchema)