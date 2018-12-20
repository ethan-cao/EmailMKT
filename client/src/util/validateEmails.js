const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
    if (!emails){
        return null;
    }

    const invalidEmails = emails.split(",")
                              .map(email => email.trim())
                              .filter(email => {
                                  return !emailRegex.test(email) 
                              });

    return invalidEmails.length ? "Invalid : " + invalidEmails : null ;
}