//module.js:
var dateofBir = document.getElementById("dateofbirth");
var emailNam = document.getElementById("emailname");
var Textnam = document.getElementById("textname");
var Adrassnam = document.getElementById("address");

function insert() {
  //   var passsward = document.getElementById("password");
  //   var pasone = document.getElementById("passwordnameone").value;
  var bir = parseInt(dateofBir.value);
  var no = parseInt(emailNam.value);
  var text = parseInt(Textnam.value);
  if (Validate(bir, no, text)) {
    Adrassnam.value = bir + no + text;
    var table = `<tr>
    <td>${bir}</td>
    <td>${no}</td>
    <td>${text}</td>

    <td>${Adrassnam.value}</td>
    </tr>`;
    document.getElementById("tablletext").innerHTML += table;
    alertMessage(
      "Success",
      "Result has been calculated successfully.",
      "successfully!"
    );
  }
}
function Validate(no, text, bir) {
  if (isNaN(no)) {
    alertMessage("Error", "Please Fill All Field", " *  with Number");
  } else if (isNaN(text)) {
    alertMessage("Error", "Please enter User", " * Second one");
  } else if (isNaN(bir)) {
    alertMessage("Error", "Please enter User", " * third one");
  } else {
    return bir, no, text;
  }
}

//   //   } else if (Adrassnam == "") {
//   //     alertMessage("Error", "Please enter Address", " *Address");
//   //   }
//   //   else if (passsward === "") {
//   //     alertMessage("Error", "Please enter Password", " *Password");
//   //   } else if (pasone === "") {
//   //     alertMessage("Error", "Please enter ConfirmPassword", " *ConfirmPassword");
//   //   }
//   else {
//     return nam, mail, birth, adre;
//   }

function alertMessage(typeError, messageError, reasonError) {
  var Type = (document.getElementById("type").innerHTML = typeError);
  let message = (document.getElementById("message").innerHTML = messageError);
  let reason = (document.getElementById("reason").innerHTML = reasonError);
}
