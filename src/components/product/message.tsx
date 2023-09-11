// Import Twilio module
const twilio = require("twilio");
//######
//docappsms@429630
//recovery: RgpUREZrCvYU4Cew2su07tiCcFYILizenfbC-GAD
///#####
// Initialize Twilio client
const accountSid = "AC59b4c2edccafa7f67cb6a9b089078b06";
const authToken = "5ce0262a8e2bec40ce28f1b99845fdcb";
const client = new twilio(accountSid, authToken);

// Define an array of recipient phone numbers
const recipients = ["whatsapp:9039479917"];

// Send a WhatsApp message to multiple numbers
async function sendWhatsAppMessage() {
  try {
    for (const recipient of recipients) {
      await client.messages.create({
        from: "whatsapp:9039479917",
        to: recipient,
        body: "Hello from your application!",
      });
      console.log(`Message sent to ${recipient}`);
    }
  } catch (error) {
    console.error("Error sending WhatsApp messages:", error);
  }
}

// Call the function to send messages
sendWhatsAppMessage();
