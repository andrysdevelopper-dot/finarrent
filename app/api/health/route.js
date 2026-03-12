import { NextResponse } from 'next/server';

export async function GET() {
    console.log('💚 Health check hit at ' + new Date().toISOString());
    return NextResponse.json({
        status: 'ok',
        time: new Date().toISOString(),
        env: {
            NODE_ENV: process.env.NODE_ENV,
            PORT: process.env.PORT,
            HOSTNAME: process.env.HOSTNAME
        }
    });
}
