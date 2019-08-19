const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'knzphumthawan@gmail.com',
//     from: 'knzphumthawan@gmail.com',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: `knzphumthawan@gmail.com`,
        subject: 'Thank for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: `knzphumthawan@gmail.com`,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};