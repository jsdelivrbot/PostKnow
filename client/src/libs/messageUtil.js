/**
*
* @module:  Reduce boilerplate SWAL code when generating application messages
*
*
*/

export default class MessageUtil {

	static boilerPlate(){
		return{

		}
	}

	static error(message, ok="Ok"){

	}

	static confirm(location){
		return{
			title: 'Confirm location',
		 	text: `Please confirm location : ${location}?`,
		 	type: 'info',
		 	showCancelButton: true,
		 	confirmButtonText: "Yes!",
		 	confirmButtonColor: "#DD6B55",
		 	cancelButtonText: "No, wrong location!",
		 	closeOnConfirm: true,
		 	closeOnCancel: false
		}
	}


}
