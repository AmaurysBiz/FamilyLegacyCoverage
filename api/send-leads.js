import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      phone,
      city,
      state,
      coverageFor,
      preferredCallTime,
      fastContact,
    } = req.body;

    if (!fullName || !phone || !preferredCallTime) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 🔥 Create transporter using Gmail SMTP (more reliable in Vercel)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔍 Verify connection (important for debugging in Vercel)
    await transporter.verify();

    const emailBody = `
🔥 NEW LEAD – Family Legacy Coverage

Name: ${fullName}
Phone: ${phone}
Location: ${city || "N/A"}, ${state || "N/A"}
Coverage For: ${coverageFor || "N/A"}
Preferred Call Time: ${preferredCallTime}
Wants 5-minute call: ${fastContact ? "YES" : "No"}

Call immediately if possible.
`;

    // 1️⃣ Send normal email
    await transporter.sendMail({
      from: `"Family Legacy Coverage" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🔥 NEW LEAD – Call ASAP",
      text: emailBody,
    });

    // 2️⃣ Send SMS via Cricket email gateway
    const cricketNumber = "5025034537@sms.cricketwireless.net";

    const smsBody = `NEW FLC LEAD
${fullName}
${phone}
${state || ""}
CALL NOW`;

    try {
      await transporter.sendMail({
        from: `"FLC Alerts" <${process.env.EMAIL_USER}>`,
        to: cricketNumber,
        subject: "",
        text: smsBody,
      });
    } catch (smsError) {
      console.error("SMS gateway error:", smsError);
      // Do not fail entire request if SMS fails
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EMAIL SEND ERROR:", err);
    return res.status(500).json({ error: "Failed to process lead" });
  }
}
