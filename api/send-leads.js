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

    // ✅ Gmail SMTP (secure)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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

    // 1️⃣ Send Gmail Notification
    await transporter.sendMail({
      from: `"Family Legacy Coverage" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🔥 NEW LEAD – Call ASAP",
      text: emailBody,
    });

    // 2️⃣ Cricket SMS (optional — will not break function)
    try {
      const cricketNumber = "5025034537@sms.cricketwireless.net";

      await transporter.sendMail({
        from: `"FLC Alerts" <${process.env.EMAIL_USER}>`,
        to: cricketNumber,
        subject: "",
        text: `NEW FLC LEAD\n${fullName}\n${phone}\nCall NOW.`,
      });
    } catch (smsError) {
      console.error("Cricket SMS error:", smsError);
    }

    // 3️⃣ Discord Webhook Notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        const discordResponse = await fetch(
          process.env.DISCORD_WEBHOOK_URL,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: `🔥 **NEW FLC LEAD**

**Name:** ${fullName}
**Phone:** ${phone}
**Location:** ${city || "N/A"}, ${state || "N/A"}
**Coverage For:** ${coverageFor || "N/A"}
**Preferred Call Time:** ${preferredCallTime}
**5-Minute Contact:** ${fastContact ? "YES" : "No"}

⚡ Call Immediately`,
            }),
          }
        );

        if (!discordResponse.ok) {
          console.error("Discord webhook failed:", await discordResponse.text());
        }
      } catch (discordError) {
        console.error("Discord error:", discordError);
      }
    } else {
      console.log("No Discord webhook configured.");
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Lead processing error:", err);
    return res.status(500).json({ error: "Failed to process lead" });
  }
}
