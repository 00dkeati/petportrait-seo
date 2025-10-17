export const dynamic = 'force-static';

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: https://petportrait.co/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
