/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

export const sendEmailNotification = functions.firestore
  .document("contacts/{contactId}")
  .onCreate((snap) => {
    console.log("Function triggered for document:", snap.id);

    const data = snap.data();
    const mailOptions = {
      from: gmailEmail,
      to: "badasms2@gmail.com",
      subject: "새로운 상담 신청",
      text:
        "새로운 상담 신청이 접수되었습니다.\n\n" +
        `이름: ${data.name}\n` +
        `연락처: ${data.contact}\n` +
        `이메일: ${data.email}\n` +
        `메시지: ${data.message}`,
    };

    return transporter.sendMail(mailOptions)
      .then((info) => {
        console.log("Email sent:", info.response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  });

declare module "nodemailer";
