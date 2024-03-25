import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);


const gemini = genAI.getGenerativeModel({ model: "gemini-pro"});


export default gemini;

