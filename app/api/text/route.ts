import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({message:"This is another GET endpoint"});
}

export async function POST(request:Request){
    const body = await request.json();
    const text = body.text || "No text provided";

    return NextResponse.json({message2:"you sent: " + text});
}