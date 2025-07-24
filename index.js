import { Router, error, json } from 'itty-router';

// Create a new router
const router = Router();

/*
 * The root route from your original server.js
 */
router.get('/', () => new Response('Zwanski Tech API - Backend is running on Cloudflare Workers!'));

/*
 * --- Support Routes ---
 * Migrated from routes/support.js
 */
router.post('/api/support/tickets', async (request) => {
  const { subject, description, contactEmail, deviceType } = await request.json();
  if (!subject || !description || !contactEmail) {
    // itty-router's error helper creates a Response object with a status code and message
    return error(400, { error: 'Missing required fields' });
  }
  const ticketId = 'TICKET123'; // In a real app, you'd generate this and save to a DB (like KV or D1)
  return json({ ticketId, message: 'Support ticket created' }, { status: 201 });
});

router.get('/api/support/tickets/:ticketId', ({ params }) => {
  const { ticketId } = params;
  return json({
    ticketId,
    status: "open",
    lastUpdate: new Date().toISOString(),
    assignedTo: null
  });
});

// You would migrate the other routes (courses, jobs, tools) here in a similar fashion.

// 404 handler
router.all('*', () => new Response('Not Found.', { status: 404 }));

// Export a fetch handler
export default {
  fetch: router.handle
};