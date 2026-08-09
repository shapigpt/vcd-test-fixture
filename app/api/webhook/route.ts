async function grantAccess(email: string) {}
export async function POST(req: Request) {
  const event = await req.json();
  if (event.type === 'checkout.session.completed') {
    await grantAccess(event.data.object.customer_email);
  }
  return new Response('ok');
}
