import FilterWidget from './filter';
import luhnAlgorithm from './luhnAlgorithm';
import ValidationStatus from './curValidStatus';

// eslint-disable-next-line
const filterWidget = new FilterWidget('.col-md-5');
const cValidStatus = new ValidationStatus('.col-md-5');
const input = document.querySelector('#card_number');
const button = document.querySelector('#submitform');
const handleClick = () => {
	const value = input.value.trim();
	const validCard = luhnAlgorithm(value);
	if (validCard) {
		cValidStatus.validationOff();
		cValidStatus.validOn();
	} else {
		cValidStatus.validationOff();
		cValidStatus.invalidOn();
	}
};

button.addEventListener('click', handleClick);
