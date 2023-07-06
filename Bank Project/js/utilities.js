function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;

  if (isNaN(inputFieldValueString)) {
    alert(`Please Give Your Amount String`);
    return (inputField.value = "");
  } else if (inputFieldValueString === "") {
    alert(`Please Give Your Amount Empty`);
    return (inputField.value = "");
  } else {
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  return (textElement.innerText = newValue);
}
