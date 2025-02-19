import mongoose from "mongoose"

export interface IWebsite extends mongoose.Document {
  url: string
  userId: mongoose.Types.ObjectId
  seoScore: number
  lastAnalyzed: Date
  metrics: {
    performance: number
    accessibility: number
    bestPractices: number
    seo: number
  }
  suggestions: Array<{
    type: string
    message: string
    priority: "high" | "medium" | "low"
    status: "pending" | "in_progress" | "completed"
  }>
}

const websiteSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seoScore: {
      type: Number,
      default: 0,
    },
    lastAnalyzed: {
      type: Date,
      default: Date.now,
    },
    metrics: {
      performance: { type: Number, default: 0 },
      accessibility: { type: Number, default: 0 },
      bestPractices: { type: Number, default: 0 },
      seo: { type: Number, default: 0 },
    },
    suggestions: [
      {
        type: { type: String, required: true },
        message: { type: String, required: true },
        priority: {
          type: String,
          enum: ["high", "medium", "low"],
          required: true,
        },
        status: {
          type: String,
          enum: ["pending", "in_progress", "completed"],
          default: "pending",
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Website || mongoose.model<IWebsite>("Website", websiteSchema)

