function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    
    console.log("::: Form Submitted :::");
    ToSendData(formText)
    .then(function(data) {
        document.getElementById('results').innerHTML = ` polarity is ${data.polarity} with polarity cofidence of
        ${data.polarity_confidence} and subjectivity is ${data.subjectivity} with subjectivity confidence of ${data.subjectivity_confidence}`;
    });
}
const ToSendData = async (formText)=>{

    const res = await fetch(`http://localhost:3000/api?input=${formText}`);
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
  
export { handleSubmit }
