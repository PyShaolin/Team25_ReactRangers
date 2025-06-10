import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Explicitly handle CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured" },
        { status: 500, headers: corsHeaders }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Try multiple models sequentially
    const models = [
      "gemini-1.5-pro-latest",
      "gemini-1.5-flash-latest",
      "gemini-1.0-pro-002"
    ];

    let lastError;
    
    for (const modelName of models) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent({
          contents: [{ role: "user", parts: [{ text: message }] }]
        });
        
        const response = await result.response;
        return NextResponse.json(
          { message: response.text() },
          { headers: corsHeaders }
        );
      } catch (error) {
        lastError = error;
        console.warn(`Failed with model ${modelName}:`, error);
        // Continue to next model
      }
    }

    throw lastError || new Error("All models failed");

  } catch (error: any) {
    console.error("Final API Error:", error);
    
    // Extract meaningful error message
    let errorMessage = "Failed to process your request";
    let statusCode = 500;
    
    if (error?.message?.includes("404") || error?.status === 404) {
      errorMessage = "Model not found - please contact support";
      statusCode = 404;
    } else if (error?.response?.data?.error?.message) {
      errorMessage = error.response.data.error.message;
      statusCode = error.response.status;
    } else if (error?.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode, headers: corsHeaders }
    );
  }
}