const keys = require("../../config/keys");

module.exports = survey => {
    return `
        <html>
            <body>
                <h3>I would like your input</h3>
                <p>I would like your input</p>
                <p>${survey.body}</p>    
                <div><a href="${keys.redirectDomain}/api/surveys/thanks"> Yes </a></div>
                <div><a href="${keys.redirectDomain}/api/surveys/thanks"> No </a></div>
            </body>
        </html>
    `;
};

// SendGrid replaces the link with its own link to track uesr response