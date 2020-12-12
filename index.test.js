/**
 * @jest-environment node
 */

const app = require('./index');

const defaultUrls = [
	'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
	'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
	'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


describe('Test Get Multiple URLs', () => {
	it ( 'Default query. Array of 3 responses.', () => {
		return app.get( defaultUrls)
			.then ( ( response ) => {
				expect ( response.length ).toBe ( 3 );
			} );
	} );

	it ( 'Default query. Array of 2 responses.', () => {
		return app.get( [`${defaultUrls[0]}`,`${defaultUrls[1]}`])
			.then ( ( response ) => {
				expect ( response.length ).toBe ( 2 );
			} );
	} );

	it ( 'Bad URL should reject', () =>  {
		return expect(app.get(['http://bad-url.com'])).rejects.toThrow(/ENOTFOUND/);
	} );


});
