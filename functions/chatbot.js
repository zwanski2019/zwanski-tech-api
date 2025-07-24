export async function onRequestPost(context) {
  return new Response(JSON.stringify({"message": "Endpoint chatbot is working"}), {
    headers: {"Content-Type": "application/json"}
  });
}