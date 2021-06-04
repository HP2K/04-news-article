function handleSubmit(event) {
    event.preventDefault()
}
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    
    .then(res => {
        return res.json()
    
    })
    .then(function(data) {
        document.getElementsByClassName('results').innerHTML = data.message
    })
}

export { handleSubmit }
