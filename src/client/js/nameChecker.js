function checkForName(formText) {
    console.log("::: Running checkForName :::", formText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    if (r == null){
        alert("Type valid URL");
    } else
return r.test(formText);
}

export { checkForName }