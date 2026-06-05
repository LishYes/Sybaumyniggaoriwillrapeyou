export const config = {
  // This matches your main root URL route
  matcher: '/',
};

export default function middleware(request) {
  // Use native Web API to fetch headers
  const userAgent = request.headers.get('user-agent') || '';

  // Detect if the request comes from the execution engine
  if (userAgent.includes('Roblox') || request.headers.get('roblox-id')) {
    
    // Return a native global Response object with your execution payload
    return new Response(
      'loadstring(game:HttpGet("https://pastefy.app/mvGbUf1D/raw"))()',
      {
        status: 200,
        headers: { 'content-type': 'text/plain' },
      }
    );
  }

  // Pass through to your index.html for regular web browsers
  return;
}
