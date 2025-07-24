export async function onRequestPost(context) {
  return new Response(JSON.stringify({"message": "Endpoint code-explainer is working"}), {
    headers: {"Content-Type": "application/json"}
  });
}