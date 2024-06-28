import { NextRequest,NextResponse } from "next/server";

const userData = [
    {
        "user_id": "12345",
        "username": "johndoe",
        "email": "johndoe@example.com",
        "created_at": "2023-06-01T12:34:56Z",
        "profile": {
          "first_name": "John",
          "last_name": "Doe",
          "age": 30,
          "gender": "male",
          "location": "New York, USA"
        }
      }
]

export async function GET(request:NextRequest) {

    try {

        return NextResponse.json({
            message : "Data Recevied",
            success : true,
            data : userData
        })
        
    } catch (error : any) {
        return NextResponse.json({
            error : error.message,
            status:400
        })
        
    }
}