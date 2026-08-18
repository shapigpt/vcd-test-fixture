export async function GET() {
  try {
    // Planted Pillar 10 flaw: empty catch block below
  } catch (e) {}

  return Response.json(
    { status: 'ok', timestamp: Date.now() },
    { headers: { 'Access-Control-Allow-Origin': '*' } } // Planted Pillar 6 flaw: wildcard CORS
  );
}
