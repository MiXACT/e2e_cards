export default class FilterWidget {
	constructor(element) {
		this.element = document.querySelector(element);
		this.onFilter = this.onFilter.bind(this);
		this.cardNum = this.element.querySelector('.form-control');
		this.cardNum.addEventListener('input', this.onFilter);
		this.cardOn = false;
	}

	onFilter() {
		const text = this.cardNum.value;
		this.cardInit(text);
	}

	cardInit(digits) {
		const cardType = {
			2: 'mir',
			30: 'diners_club',
			36: 'diners_club',
			38: 'diners_club',
			31: 'jcb',
			35: 'jcb',
			34: 'amex',
			37: 'amex',
			4: 'visa',
			5: 'master',
			60: 'discover',
		};
		const cards = this.element.querySelectorAll('.card');
		if (digits.length <= 2 && !this.cardOn) {
			if (digits in cardType) {
				this.cardOn = true;
				cards.forEach((item) => {
					if (!item.classList.contains(cardType[digits])) {
						item.classList.add('cdisabled');
					}
				});
			} else {
				cards.forEach((item) => item.classList.remove('cdisabled'));
			}
		}
		if (!digits) {
			this.cardOn = false;
			cards.forEach((item) => item.classList.remove('cdisabled'));
		}
	}
}
