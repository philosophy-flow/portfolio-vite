import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwkavpez");

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-field">
        <label htmlFor="name">Name</label>
        <input id="name" type="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="contact-field">
        <label htmlFor="message">What's up?</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
