function checkForName(formText) {
    console.log("::: Running checkForName :::", formText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    alert("Please enter a valid URL");
    return r.test(formText);
}

export { checkForName }