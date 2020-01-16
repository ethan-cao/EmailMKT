const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// This class just follows sendgrid API requirement

class Mailer extends helper.Mail{

    constructor({subject, recipients}, contentHTML){
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email("no-reply@xxx.com");
        this.subject = subject;
        this.body = new helper.Content("text/html", contentHTML);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();

        this.addRecipients();
    }

    formatAddresses(recipients) {
        console.log(recipients);

        return recipients.map(( {email} ) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });

        this.addPersonalization(personalize);
    }

    // send email to different people
    async send() {
        const request = this.sgApi.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON()
        });

        console.log("sending");
       const response = await this.sgApi.API(request);
        console.log("finished");

       return response;
    }

}

module.exports = Mailer;