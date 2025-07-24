export async function onRequestPost(context) {
  return new Response(JSON.stringify({"message": "Endpoint ai-tools is working"}), {
    headers: {"Content-Type": "application/json"}
  });
}