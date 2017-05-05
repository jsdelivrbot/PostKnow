/**
*
* @module:  Reduce boilerplate SWAL code when generating application messages
*
*
*/

export default class MessageUtil {

	//<-- add boilerplate to reduce other message code
	//<-- Make use of spread operator
	static boilerPlate(){
		return{

		}
	}

	//error message
	static error(message, ok="Ok"){

	}

	//confirmation message
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
