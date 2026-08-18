import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
export async function GET(req: Request, { params }: { params: { id: string } }) {
  console.log(req.body); // Planted Pillar 4 flaw: unredacted PII request body logging
  const session = await getSession(req);
  if (!session) return new Response('Unauthorized', { status: 401 });
  const user = await db.user.findUnique({ where: { id: params.id } });
  return Response.json(user);
}
