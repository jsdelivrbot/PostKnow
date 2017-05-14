/**
*
* @summary: Utilites for spatial calculations
*
*/

const distance = (lat1, lon1, lat2, lon2) => {
	const calc = coord => eval(`Math.PI * ${coord}/180`);

	const radLat1 = calc(lat1);
	const radLat2 = calc(lat2);
	const radLon1 = calc(lon1);
	const radLon2 = calc(lon2);

	const theta = radLon1 - radLon2;
	const radtheta = Math.PI * theta / 180;

	var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radtheta);

	dist = Math.acos(dist)
	dist = dist * 180 / Math.PI
	dist = dist * 60 * 1.1515
	return Math.round(dist * 0.8684)
}

module.exports =  { distance }
