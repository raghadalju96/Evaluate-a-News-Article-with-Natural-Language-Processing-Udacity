const validUrl = document.getElementById("validUrl");
const model = document.getElementById("model");
const confidence = document.getElementById("confidence");
const subjectivity = document.getElementById("subjectivity");
const irony = document.getElementById("irony");

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let userUrl = document.getElementById("url").value;

  const sendURL = async (url = "") => {
    const res = await fetch("http://localhost:8081/article", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    });

    try {
      const newData = await res.json();
      console.log(newData);
      model.innerHTML = `Model: ${newData.model}`;
      confidence.innerHTML = `Confidence: ${newData.confidence}`;
      subjectivity.innerHTML = `Subjectivity: ${newData.subjectivity}`;
      irony.innerHTML = `Irony: ${newData.irony}`;
      return newData;
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (Client.is_url(userUrl)) {
    validUrl.style.visibility = "hidden";
    sendURL(userUrl);
  }
}

export { handleSubmit };
