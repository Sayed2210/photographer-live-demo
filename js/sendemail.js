function sendMail() {
  
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("exampleInputEmail1").value,
    message: document.getElementById("exampleFormControlTextarea1").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    packages: document.getElementById("packages").value,
  };

  const serviceID = "service_ft9d6mi";
  const templateID = "template_hs72u83";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("exampleInputEmail1").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("location").value = "";
      document.getElementById("packages").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
