import { useState } from 'react';

const EMPTY = { name: '', message: '', check: '' };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [checkNumber] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [status, setStatus] = useState('');

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (parseInt(form.check, 10) !== checkNumber + 5) {
      setStatus('error');
      return;
    }
    const address = ['mohswoundcare', 'pm.me'].join('@');
    const subject = encodeURIComponent('Message from mohswoundcare.com');
    const body = encodeURIComponent(`From: ${form.name}\n\n${form.message}`);
    window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={update} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your message</label>
        <span className="hint" id="message-hint">
          I cannot answer questions about your own wound. Please call your surgeon's office for that.
        </span>
        <textarea
          id="message"
          name="message"
          aria-describedby="message-hint"
          value={form.message}
          onChange={update}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="check">What is {checkNumber} + 5?</label>
        <span className="hint">This helps block spam.</span>
        <input id="check" name="check" type="text" inputMode="numeric" value={form.check} onChange={update} required />
      </div>
      <button type="submit" className="button primary">
        Open my email app to send
      </button>
      {status === 'success' && (
        <p className="status success" role="status">
          Your email app should now open with your message filled in. Press send in your email app to finish.
        </p>
      )}
      {status === 'error' && (
        <p className="status error" role="alert">
          That answer was not right. Please check the sum and try again.
        </p>
      )}
    </form>
  );
}
