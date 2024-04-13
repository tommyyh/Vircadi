'use server';

import nodemailer from 'nodemailer';

export const sendMessage = async (prevState: any, data: FormData) => {
  const firstName = data.get('firstName') as string;
  const lastName = data.get('lastName') as string;
  const email = data.get('email') as string;
  const msg = data.get('msg') as string;

  // Email sending
  const { SMTP_PASS, SMTP_EMAIL, EMAIL_TO } = process.env;
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS
    }
  });
  
  // // Validate email
  // const validateEmail = (email: string) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  // if (!validateEmail(email)) return { status: 'error', type: 'email' }

  // Verify connection
  try {
    await transport.verify();
  } catch (e) {
    console.log('GFIHERGUGEIHJ: ' + e);
    
    return { status: 'error' }
  }

  // Send mail
  try {
    await transport.sendMail({
      from: SMTP_PASS,
      to: EMAIL_TO,
      subject: `Vircadi new message from: ${firstName} ${lastName}`,
      text: formatMAIL(firstName, lastName, email, msg),
      html: formatMAILHtml(firstName, lastName, email, msg)
    })

    return { status: 'success' }
  } catch (e) {
    console.log(e);
    
    return { status: 'error' }
  }
}


const formatMAIL = (firstName: string, lastName: string, email: string, msg: string) => {
  return `Vircadi website contact: ${firstName} ${lastName} \n\n Full name: ${firstName} ${lastName} \n Sender email: ${email}\n Message: ${msg}`
}

const formatMAILHtml = (firstName: string, lastName: string, email: string, msg: string) => {
  return `<h1>Vircadi website contact: ${firstName} ${lastName}</h1><br><ul><li>Full name: ${firstName} ${lastName}</li><li>Sender email: ${email}</li><li>Message: ${msg}</li></ul>`
}
