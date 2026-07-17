/**
 * Lead-form submission helper.
 *
 * ⚠️ TODO (setup): Wire this to Chambersburg Bail Bonds' OWN lead destination
 * before going live. The previous template posted every lead to a third-party
 * CRM belonging to a different company — that wiring has been removed so no
 * lead data leaks to the prior owner.
 *
 * To activate lead capture, set LEAD_ENDPOINT to your own endpoint (e.g. a
 * Formspree/Basin URL, your CRM's inbound webhook, or a serverless function).
 * While it is empty, the forms validate and show a success state but do NOT
 * transmit anything anywhere.
 */
export const LEAD_ENDPOINT = ''; // TODO: set to Chambersburg's own form/CRM endpoint

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Submits a lead if an endpoint is configured; otherwise no-ops so the UI can
 * still confirm receipt. Never throws for the empty-endpoint case.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!LEAD_ENDPOINT) {
    // No destination configured yet — see TODO above.
    const isDev = (import.meta as { env?: { DEV?: boolean } }).env?.DEV;
    if (isDev) {
      console.warn('[leads] LEAD_ENDPOINT is not set; lead not transmitted.', payload);
    }
    return;
  }

  await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
