import mongoose from "mongoose"

export interface IContribution extends mongoose.Document {
  title: string
  description: string
  code: string
  author: mongoose.Types.ObjectId
  type: "component" | "snippet" | "project"
  framework: string
  tags: string[]
  downloads: number
  upvotes: number
  comments: Array<{
    user: mongoose.Types.ObjectId
    text: string
    createdAt: Date
  }>
}

const contributionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["component", "snippet", "project"],
      required: true,
    },
    framework: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    downloads: {
      type: Number,
      default: 0,
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Contribution || mongoose.model<IContribution>("Contribution", contributionSchema)

