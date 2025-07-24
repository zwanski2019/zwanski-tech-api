export async function onRequestPost(context) {
  return new Response(JSON.stringify({"message": "Endpoint resume is working"}), {
    headers: {"Content-Type": "application/json"}
  });
}