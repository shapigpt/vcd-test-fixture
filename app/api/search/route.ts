import { db } from '@/lib/db';
export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get('q');
  const rows = await db.$queryRawUnsafe(`SELECT * FROM products WHERE name LIKE '%${q}%'`);
  return Response.json(rows);
}
