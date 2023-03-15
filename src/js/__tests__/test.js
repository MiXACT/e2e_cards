import luhnAlgorithm from '../luhnAlgorithm';

test('testing luhnAlgorithm', () => {
	const result = luhnAlgorithm('4967538166331332');
	expect(result).toBeTruthy();
});
