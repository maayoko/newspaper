import "whatwg-fetch";

const fetch = window.fetch;
const commonHeaders = {
	"Content-Type": "application/json",
	Accept: "application/json"
};

const get = (url, headers = {}) => {
	return fetch(url, {
		method: "GET",
		headers: {
			...commonHeaders,
			...headers
		}
	});
};

export { get };
