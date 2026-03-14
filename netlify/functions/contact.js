// import nodemailer from "nodemailer";
// import "dotenv/config";

// export async function handler(event) {
//     console.log("EMAIL:", process.env.EMAIL);
//    console.log("PASS:", process.env.EMAIL_PASS);


//   const headers = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Content-Type",
//     "Access-Control-Allow-Methods": "POST, OPTIONS"
//   };

//   // Handle preflight request
//   if (event.httpMethod === "OPTIONS") {
//     return {
//       statusCode: 200,
//       headers
//     };
//   }

//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       headers,
//       body: "Method Not Allowed"
//     };
//   }

//   try {

//     const { name, email, projectTitle, message } = JSON.parse(event.body);

//     const transporter = nodemailer.createTransport({
//        service: 'gmail',
//        secure: true,
//        port: 465,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS
//       }
//     });
//     await transporter.verify();
//     console.log("SMTP Connected");


//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: process.env.EMAIL,
//       subject: `New Project Inquiry: ${projectTitle}`,
//       html: `
//         <h2>New Website Lead</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Project Title:</b> ${projectTitle}</p>
//         <p><b>Message:</b></p>
//         <p>${message}</p>
//       `
//     });

//     return {
//       statusCode: 200,
//       headers,
//       body: JSON.stringify({
//         success: true,
//         message: "Message sent successfully"
//       })
//     };

//   } catch (error) {
     

//     return {
//       statusCode: 500,
//       headers,
//       body: JSON.stringify({
//         success: false,
//         message: "Server error"
//       })
//     };

//   }
// }

import { Resend } from "resend";

export async function handler(event) {

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  try {

    const { name, email, projectTitle, message } = JSON.parse(event.body);

    const resend = new Resend(process.env.RESEND_API_KEY);

     await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "khorwalnishant@gmail.com",
      subject: `New Project Inquiry: ${projectTitle}`,
      html: `
        <h2>New Website Lead</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Project:</b> ${projectTitle}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {

    console.error(error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false })
    };

  }
}
