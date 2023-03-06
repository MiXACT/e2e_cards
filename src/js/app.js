import { FilterWidget } from '../js/filter';
import luhnAlgorithm from '../js/luhnAlgorithm';

const filterWidget = new FilterWidget('.col-md-5');
const input = document.querySelector('#card_number');
const button = document.querySelector('#submitform');
const handleClick = () => {
	const value = input.value.trim();
	const validCard = luhnAlgorithm(value);
	if (validCard) {
		console.log('Valid card!');
	} else {
		console.log('Invalid card!');
	}  
}

button.addEventListener('click', handleClick);
