document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(){
	name = document.querySelector("#name").value;
	email = document.querySelector("#email").value;
	subject = document.querySelector("#subject").value;
	message = document.querySelector("#message").value;
	alert("function call success");
	// sendEmail(name, email, subject, message);
}


function sendEmail(name, email, message){
	alert("function call success");
	Email.send({
		Host:"smtp.gmail.com",
		Username: "tanishkrathod111@gmail.com",
		Password: "twadpannolktlunz",
		To: "tanishkrathod111@gmail.com",
		From: "tanishkrathod111@gmail.com"
		Subject: `${name} sent you a message about ${message}`,
		Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

	}).then((message) => alert("Message has been successfully sent."));
}
