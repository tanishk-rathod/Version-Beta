//About Page

const aboutText = "Version Beta is the amalgamation of some of the nation's greatest technological minds, with an ideal platform for technology enthusiasts to demonstrate their talents and ingenuity. After successfully organizing its digital variation for the last two years we are back this year, grander than ever, to build on the legacy of our offline editions. To bring you an array of diverse activities, we have included synchronized delivery of workshops, and guest speakers of the highest caliber from the world of technology and entrepreneurship. It is accompanied by a 36-hour hackathon powered by MLH, the largest in central India, allowing participants to test their intelligence, be recognized and get rewarded while rubbing shoulders with the offline NIT-B campus experience and real-time guidance from the MLH community. In a stroke, Version Beta is the souls' satisfiers of tech aficionados while fostering the next generation of developers, thinkers, and entrepreneurs.";
const WSCount = 200;
const StudentCount = 2000;
const HacCount = 1463;
const AwardCount = 24;

let aboutContent=document.querySelector("#about-content");
aboutContent.textContent = aboutText;

let workshopCount = document.querySelector("#workshop-count");
workshopCount.setAttribute("data-purecounter-end", WSCount);

let studentCount = document.querySelector("#student-count");
studentCount.setAttribute("data-purecounter-end", StudentCount);

let hackathonCount = document.querySelector("#hackathon-count");
hackathonCount.setAttribute("data-purecounter-end", HacCount);

let awardCount = document.querySelector("#award-count");
awardCount.setAttribute("data-purecounter-end", AwardCount);


//Contact Page

let address = document.querySelector("#address");
address.textContent = "MANIT Bhopal India";

let email = document.querySelector("#email");
email.textContent = "istescmanit@gmail.com";

let phone = document.querySelector("#phone");
phone.textContent = "+91 1234567890";




//FAQ'S Page

let q1 = document.querySelector("#q1");
q1.textContent = "Who are we?";

let a1 = document.querySelector("#a1");
a1.textContent = "ISTE SC MANIT is one of the oldest societies of MANIT. We've been awarded as the best students' chapter in MP - Chhattisgarh region three times in a row. So when it comes to organising technical events, we're always at the top of the food chain.";

let q2 = document.querySelector("#q2");
q2.textContent = "What is Version Beta?";

let a2 = document.querySelector("#a2");
a2.textContent = "It's Central India's largest students' held Hackathon in which students from all over the country compete against each other for 36 hours non-stop and put their coding skills to test.";

let q3 = document.querySelector("#q3");
q3.textContent = "Who should participate?";

let a3 = document.querySelector("#a3");
a3.textContent = "If you are a college student who is interested in solving real-life problems through the virtual world of your laptop screens, you're at the right place. The Hackathon is just for you.";

let q4 = document.querySelector("#q4");
q4.textContent = "Number of members in a team?";

let a4 = document.querySelector("#a4");
a4.textContent = "The maximum no. of team members is 4. You can also participate in a team of 3 or 2 members. It's up to you. Choose your crewmates carefully to prevent being ejected.";


let q5 = document.querySelector("#q5");
q5.textContent = "How to Participate?";

let a5 = document.querySelector("#a5");
a5.textContent = "Visit our website to register for the Hackathon. You'll be provided all the details there.";


let q6 = document.querySelector("#q6");
q6.textContent = "What is selection procedure?";

let a6 = document.querySelector("#a6");
a6.textContent = "Upload your GitHub profiles and CV while registering through Devfolio and you're all done. All the best!";

let q7 = document.querySelector("#q7");
q7.textContent = "What we are looking in a team?";

let a7 = document.querySelector("#a7");
a7.textContent = "You don't need to be a coding genius to participate in the event. The only requirement is your willingness and passion to learn. There is a winner among us and it can be you. So buckle up coz we're gonna make you an offer you can't refuse..";

let  = document.querySelector("#q8");
q8.textContent = "Will the Hackathon be conducted Online?";

let a8 = document.querySelector("#a8");
a8.textContent = "No, the hackathon comes as a combo package of rewards and on-campus experience of NIT Bhopal.";

let q9 = document.querySelector("#q9");
q9.textContent = "What is the Goal of Hackathon?";

let a9 = document.querySelector("#a9");
a9.textContent = "The main aim of Hackathon is to bring out the coding skills of students to practical use.";

let q10 = document.querySelector("#q10");
q10.textContent = "How would I know If I got selected?";

let a10 = document.querySelector("#a10");
a10.textContent = "We'll mail you and let you know.";

let q11 = document.querySelector("#q11");
q11.textContent = "Cost of Participation in Hackathon?";

let a11 = document.querySelector("#a11");
a11.textContent = "If you don't count the internet cost and the electricity bill for your laptop, then it's zero. NIL. Nothing..";





