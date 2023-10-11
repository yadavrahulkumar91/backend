// module.exports = ({ env }) => ({
//     // ...
//     email: {
//         config: {
//             provider: 'sendgrid',
//             providerOptions: {
//                 apiKey: env('SENDGRID_API_KEY'),
//             },
//             settings: {
//                 // defaultFrom: 'myemail@protonmail.com',
//                 defaultFrom: 'yadavrahulkumar91@gmail.com',
//                 // defaultReplyTo: 'myemail@protonmail.com',
//                 defaultReplyTo: 'yadavrahulkumar91@gmail.com',
//             },
//         },
//     },
//     // ...
// });

module.exports = ({ env }) => ({
email: {
    provider: 'sendmail',
        providerOptions: {
        // Additional options specific to the Sendmail provider can be configured here.
        // For example, you can specify the path to the Sendmail binary if it's not in the default location.
        // sendmailPath: '/usr/sbin/sendmail', // Example path to the Sendmail binary.
    },
    settings: {
        // Other email settings, like the default sender address, can be configured here.
        defaultFrom: 'yadavrahulkumar91@gmail.com',
        defaultReplyTo: 'yadavrahulkumar91@gmail.com',
    },
},

});