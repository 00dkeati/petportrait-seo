export const runtime = "edge";

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://petportrait.co/sitemap.xml`;
  
  return new Response(body, { 
    headers: { "Content-Type": "text/plain" } 
  });
}