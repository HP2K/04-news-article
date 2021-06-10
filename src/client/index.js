import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")



window.addEventListener("DOMContentLoaded", (event) => {
	console.log("DOM fully loaded and parsed");
	//Add submit event listener to the form
	document.querySelector("form").addEventListener("submit", handleSubmit);
});


export {
    checkForName,
    handleSubmit
}
