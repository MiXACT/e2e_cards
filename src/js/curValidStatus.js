export default class ValidationStatus {
	constructor(element) {
		this.element = document.querySelector(element);
		this.cValid = this.element.querySelector('#c_valid');
		this.cInvalid = this.element.querySelector('#c_invalid');
	}

	validOn() {
		this.cValid.classList.remove('cvalid_hidden');
	}

	invalidOn() {
		this.cInvalid.classList.remove('cvalid_hidden');
	}

	validationOff() {
		this.cValid.classList.add('cvalid_hidden');
		this.cInvalid.classList.add('cvalid_hidden');
	}
}
