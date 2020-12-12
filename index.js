const axios = require ( 'axios' );

/**
 * Given a URL, return the response
 *
 * Note: AXIOS returns response.data   Return this..not response by itself.
 * @param url
 * @returns {Promise<unknown>}
 * @private
 */
const _getData = ( url ) => {
	return new Promise ( ( resolve, reject ) => {
		axios.get ( url ).then ( ( response ) => {
			resolve ( response.data );
		} ).catch ( ( err ) => {
			reject ( err );
		} );
	} )
};

/**
 * ~Given an array of URLs, return a promise that will resolve
 * with the content.
 *
 * @param urls
 * @returns {Promise<unknown>}
 */
const get = ( urls ) => {
	return new Promise ( ( resolve, reject ) => {
		const promiseArray = [];
		urls.forEach ( ( url ) => {
			promiseArray.push ( _getData ( url ) );
		} );
		Promise.all ( promiseArray ).then ( ( response ) => {
			resolve ( response );
		} ).catch ( ( err ) => {
			reject ( err );
		} )
	} );
};

exports.get = get;
