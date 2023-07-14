import moment from "moment/moment"

const Helper = {}

Helper.TOKEN = localStorage.getItem('d-user-token')

Helper.baseUrl = 'http://127.0.0.1:8000'

Helper.apiUrl = 'http://127.0.0.1:8000/api/'

Helper.errorToHtml = (errors) => {
  let html = '';
  for (var key in errors) {
    if (errors.hasOwnProperty(key)) {
      var errorMessages = errors[key];
      for (var i = 0; i < errorMessages.length; i++) {
        var errorMessage = errorMessages[i];
        html += `<li>${errorMessage}</li>`;
      }
    }
  }
}

Helper.dateFormate = (date) => {
  return moment(date).format('MMMM Do YYYY')
}

export default Helper;