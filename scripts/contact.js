// This script expects the form in index.html to have its 'action' attribute set to your Formspree endpoint.
// By default we'll intercept and show a friendly message (so user doesn't need a working endpoint for the template to behave).
const form = document.getElementById('contact-form');
const result = document.getElementById('contact-result');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Try to submit if action is set; otherwise simulate success for the template.
  const action = form.getAttribute('action') || '';
  const data = new FormData(form);
  if (!action) {
    result.textContent = 'Template: message simulated. To enable real messages, set form.action to your Formspree URL.';
    form.reset();
    return;
  }
  try {
    const res = await fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      result.textContent = 'Message sent — thank you!';
      form.reset();
    } else {
      const json = await res.json();
      result.textContent = json.error || 'Submission failed.';
    }
  } catch (err) {
    console.error(err);
    result.textContent = 'Network error — check the console.';
  }
});