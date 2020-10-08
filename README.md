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
![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/1.png "step 1")
	 - Click ADD CREDITS to buy credits with credit cards for sending email
		 - use test card  4242 4242 4242 4242 with expiration date 10/20 and CVC 123 to add 5 credits. 
		![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/2.png "step 2")
	 - After clicking pay $5, and refresh the page, you will get 5 credits
	 - Click the red ADD button on bottom right to create a new email campaign	 ![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/3.png "step 3")
	 - Fill title, subject, email body and recipients (use comma , to separate multiple recipients). For this version, the mail template contains a simple yes/no question.
	 ![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/4.png "step 4")
	 - Click Next and review what has been filled. If everything is correct, click Send Surveys to send the filled content to all recipients.
	 ![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/5.png "step 5")
	 - Back on page [https://radiant-lowlands-92286.herokuapp.com/surveys](https://radiant-lowlands-92286.herokuapp.com/surveys), created email campaigns are displayed and you can see how many recipients picked yes and no.
	![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/6.png "step 6")
	 - All recipients are expected to received an email like this
	![alt text](https://raw.githubusercontent.com/ethan-cao/EmailMKT/master/instruction/7.png "step 7")
