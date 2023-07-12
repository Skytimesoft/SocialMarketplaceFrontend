
const Helper = {}

Helper.TOKEN = localStorage.getItem('d-user-token')

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

export default Helper;