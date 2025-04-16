function updateTime() {
  //bangkok
  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  bangkokDateElement.innerHTML = moment()
    .tz("Asia/Bangkok")
    .locale("de")
    .format("dddd, D. MMMM YYYY");
  bangkokTimeElement.innerHTML = moment().tz("Asia/Bangkok").format("H:mm:ss");
  //Daressalam
  let daressalamElement = document.querySelector("#daressalam");
  let daressalamDateElement = daressalamElement.querySelector(".date");
  let daressalamTimeElement = daressalamElement.querySelector(".time");
  daressalamDateElement.innerHTML = moment()
    .tz("Africa/Dar_es_Salaam")
    .locale("de")
    .format("dddd, D. MMMM YYYY");
  daressalamTimeElement.innerHTML = moment()
    .tz("Africa/Dar_es_Salaam")
    .format("H:mm:ss");
  //Leipzig
  let leipzigElement = document.querySelector("#leipzig");
  let leipzigDateElement = leipzigElement.querySelector(".date");
  let leipzigTimeElement = leipzigElement.querySelector(".time");
  leipzigDateElement.innerHTML = moment()
    .tz("Europe/Berlin")
    .locale("de")
    .format("dddd, D. MMMM YYYY");
  leipzigTimeElement.innerHTML = moment().tz("Europe/Berlin").format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
