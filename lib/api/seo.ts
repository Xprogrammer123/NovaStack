import axios from "axios"

export async function analyzeSEO(url: string) {
  const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY

  try {
    const response = await axios.get(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`,
    )

    const { lighthouseResult } = response.data
    const { categories } = lighthouseResult

    return {
      performance: Math.round(categories.performance.score * 100),
      accessibility: Math.round(categories.accessibility.score * 100),
      bestPractices: Math.round(categories["best-practices"].score * 100),
      seo: Math.round(categories.seo.score * 100),
    }
  } catch (error) {
    console.error("Error analyzing SEO:", error)
    throw new Error("Failed to analyze website")
  }
}

