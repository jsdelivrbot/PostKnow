// @flow

/**
*
* @module:  Reduce boilerplate SWAL code when generating application messages
*
*
*/

export default class MessageUtil {
	static boilerPlate() {
		return {};
	}

	//error message
	static error(message: string, ok = 'Ok'): Object {}

	//confirmation message
	static confirm(location: string): Object {
		return {
			title: 'Confirm location',
			text: `Please confirm location : ${location}?`,
			type: 'info',
			showCancelButton: true,
			confirmButtonText: 'Yes!',
			confirmButtonColor: '#DD6B55',
			cancelButtonText: 'No, wrong location!',
			closeOnConfirm: true,
			closeOnCancel: false
		};
	}
}
