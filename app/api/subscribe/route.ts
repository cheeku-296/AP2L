import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailTrimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
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
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

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
            .info-box { background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 16px; }
            .info-box h3 { margin: 0 0 8px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; }
            .info-box p { margin: 0; font-size: 15px; font-weight: 600; color: #1e293b; }
            .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Blog Newsletter Subscription</h1>
              <p>Received via AP2L Blog Insights Page</p>
            </div>
            <div class="content">
              <div class="info-box">
                <h3>Subscriber Email:</h3>
                <p><a href="mailto:${emailTrimmed}" style="color:#7c3aed; text-decoration:none;">${emailTrimmed}</a></p>
              </div>
            </div>
            <div class="footer">
              This message was sent automatically from the AP2L blog newsletter subscription form.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"AP2L Blog Newsletter" <${smtpUser}>`,
      to: "anishnale@gmail.com",
      replyTo: emailTrimmed,
      subject: `New Newsletter Subscriber: ${emailTrimmed}`,
      text: `A new user subscribed to the AP2L Blog Newsletter:\nEmail: ${emailTrimmed}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Thank you for subscribing to our newsletter!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error processing newsletter subscription:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to subscribe.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
