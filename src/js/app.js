// Алгоритм Луна
// https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0

// номера карт
// https://www.banki.ru/blog/BAY/8991.php

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
