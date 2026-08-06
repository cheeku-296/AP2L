import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      company,
      designation,
      email,
      phone,
      product,
      message,
    } = body;

    // Mandatory fields validation
    if (!firstName || !lastName || !company || !designation || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: "Please fill in all mandatory fields." },
        { status: 400 }
      );
    }

    // Business email validation
    const emailTrimmed = String(email).trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const DISALLOWED_FREE_DOMAINS = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "icloud.com",
      "aol.com",
      "live.com",
      "mail.com",
      "proton.me",
      "protonmail.com",
      "yandex.com",
      "gmx.com",
      "zoho.com",
    ];

    const emailDomain = emailTrimmed.split("@")[1]?.toLowerCase();
    if (emailDomain && DISALLOWED_FREE_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Please enter a valid business email (personal domains like Gmail/Yahoo are not allowed)." },
        { status: 400 }
      );
    }

    // Phone number validation (7-15 digits allowed)
    const phoneDigits = phone.replace(/\D/g, "");
    if (!/^\+?[0-9\s\-\(\)]{7,20}$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid phone number (7 to 15 digits)." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || "apmosystechnologies.2012@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "ajhrczzbtbcrbtsf";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fullName = `${firstName} ${lastName || ""}`.trim();

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%); color: #ffffff; padding: 28px 32px; text-align: left; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.85; }
            .content { padding: 32px; }
            .info-grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .info-grid td { padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .info-grid td.label { font-weight: 600; color: #64748b; width: 35%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
            .info-grid td.value { color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 16px; }
            .message-box h3 { margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #475569; uppercase; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
              <p>Received via AP2L Platform Contact Form</p>
            </div>
            <div class="content">
              <table class="info-grid">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${fullName}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color:#7c3aed; text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone</td>
                  <td class="value">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td class="label">Company</td>
                  <td class="value">${company || "Not provided"}</td>
                </tr>
                <tr>
                  <td class="label">Designation</td>
                  <td class="value">${designation || "Not provided"}</td>
                </tr>
                <tr>
                  <td class="label">Product / Interest</td>
                  <td class="value" style="color: #7c3aed; font-weight: 700;">${product || "General Enquiry"}</td>
                </tr>
              </table>

              <div class="message-box">
                <h3>Message / Requirement:</h3>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              This message was sent automatically from the AP2L website contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"AP2L Contact Form" <${smtpUser}>`,
      to: "anishnale@gmail.com",
      replyTo: email,
      subject: `New Lead: ${fullName} (${product || "General Enquiry"})`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\nDesignation: ${designation || "N/A"}\nProduct: ${product || "General Enquiry"}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email via SMTP:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
