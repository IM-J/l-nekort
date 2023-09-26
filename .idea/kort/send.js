const mailer = require('nodemailer');
const innhold = require('script.js');

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        bruker: 'Sender@gmail.com', //Må byttes ut med en mailaddresse tilhørende kommunen
        pass: 'passordet' //Må byttes ut med et emailpassord
    }
});
var forHvem = brukerInput();
var formId;
if (forHvem === 'selv'){
    formId='selv';
}
else if (formHvem === 'alt'){
    formId = 'alt';
}
var formData = submit(formId)

let mail ={
    from: 'Sender@gmail.com',
    to: document.getElementById('epost').value,
    subject: 'Kvittering på bestilling',
    text: submit('formId') //hente ut alt fra inputtene
}

let levering ={
    from: 'Sender@gmail.com',
    to: 'fagsystem@mail.no', //ex. bibliotek
    subject: 'Ny bestilling',
    text: submit('formId') //hente ut alt fra inputtene
}

transporter.sendMail(mail, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});