'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('honeypot') as string;

    // Spam Protection
    if (honeypot) {
      console.warn("Spam detected in honeypot field.");
      return { success: false, error: "Spam detected." };
    }

    // Basic Validation
    if (!firstName || !lastName || !email || !phone || !location) {
      return { success: false, error: "Missing required fields." };
    }

    const toEmail = process.env.CONTACT_EMAIL_TO;

    if (!toEmail) {
       console.error("CONTACT_EMAIL_TO is not defined in environment variables.");
       return { success: false, error: "Server configuration error." };
    }

    // We can't actually send emails with a fake API key, this will throw an error.
    // However, the structure is correct for when the real key is added.
    const data = await resend.emails.send({
      from: 'Ritiesh Realtors Website <onboarding@resend.dev>', // Resend's testing domain
      to: [toEmail],
      subject: `New Lead: ${interest ? interest.toUpperCase() : 'General Inquiry'} from ${firstName} ${lastName}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested Location:</strong> ${location.toUpperCase()}</p>
        <p><strong>Interest Type:</strong> ${interest || 'Not Specified'}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message || 'No additional message provided.'}</p>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };

  } catch (error: any) {
    console.error("Failed to send email:", error.message);
    return { success: false, error: "Failed to send email. Please check server configuration." };
  }
}
