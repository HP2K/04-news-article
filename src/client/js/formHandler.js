
const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const api_key = process.env.API_KEY;

const getSentimentAnalysis = async (userURL) => {
	const res = await fetch(`${baseURL}?key=${API_KEY}&lang=en&url=${userURL}`);
	try {
		const data = await res.json();
		console.log("data: ", data);
		return data;
	} catch (error) {
		console.log("error", error);
	}
};
// Setup a POST route where you'll call getSentimentAnalysis method



const postResults = async (url = "http://localhost:8081/test", data = {}) => {
    console.log("::: Form Submitted :::", data);
    const response  = await fetch ("http://localhost:8081/test", {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify( {'url':url})
    });
    try{
        const newData = await response.json();
        return newData;
        }    catch (error) {
        console.log("error", error);
    }
 };


 
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (checkForurl(formText)) {
    postResults(formText)
    .then(res=> {
        document.getElementsById('score_tag').innerHTML = `score_tag: $(res.score_tag)`;
        document.getElementsById('model').innerHTML = `Model: ${res.model}`;
        document.getElementsById('agreement').innerHTML = `Agreement: ${res.agreement}`; 
        document.getElementsById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementsById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementsById('irony').innerHTML = `Irony: ${res.irony}`;
     
    })
}else {
    alert("Enter correct url")
}





export { handleSubmit }}
