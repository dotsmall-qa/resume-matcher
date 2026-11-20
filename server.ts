import express from "express";
import OpenAI from "openai";
import {createClient} from "@supabase/supabase-js";
// QA_RETENTION_CANARY_MATCHER_NOT_A_CREDENTIAL
const modelCredential = process.env.OPENAI_API_KEY;
const storageLocation = process.env.SUPABASE_URL;
function POST(){return Response.json({status:"QA fixture; no provider request",available:!!modelCredential && !!storageLocation,adapters:[typeof OpenAI,typeof createClient]});}

const app=express();
app.get("/qa",(_request,response)=>{response.json({fixture:true,providerCalls:false});});
app.listen(3001,"127.0.0.1");
