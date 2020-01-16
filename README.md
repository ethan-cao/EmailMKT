**Email marketing full stack App**

 - Tech stack
 	 - Frontend:  
    view: React + materialize-css  
    model: Redux  
    utility: Lodash  
    package manager: npm  
    task runner: npm  
	 - Backend:  
	    server:NodeJS, Express
	    DB: MongoDB
	    host: Heroku  
   	 - 3rd party service:  
    authentication: Google+ API, passport  
    payment: Stripe 
    email: Sendgrid  
    
 - How to use
	 - Login with your google account
	 - Click ADD CREDITS to with credit cards for sending email
		 - use test card  4242 4242 4242 4242 with expiration date 10/20 and CVC 123 to add 5 credits. 
	 - After clicking pay $5, and refresh the page, you will get 5 more credits
	 - Click the red ADD button on bottom right and create a new email campaign
	 - Fill title, subject, email body and recipients (use comma , to separate multiple recipients). For this version, the mail template contains a simple yes/no question.
	 - Click Next and review what has been filled.
	 - If everything is correct, click Send Surveys to send the filled content to all recipients.
	 - Back on page [https://radiant-lowlands-92286.herokuapp.com/surveys](https://radiant-lowlands-92286.herokuapp.com/surveys), created email campaigns are displayed and you can see how many recipients picked yes and no.
	 
    
    