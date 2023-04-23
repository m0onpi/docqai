import { OpenAI } from "langchain/llms/openai";
import { CSVLoader } from "langchain/document_loaders/fs/csv";


const loader = new CSVLoader("info.csv");

export const docs = await loader.load();

console.log(docs)


