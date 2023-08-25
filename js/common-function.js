

function getInputFieldValueID(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValue=parseFloat(inputField.value);
    return inputFieldValue;
}
function getInputFieldTextID(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValue=parseFloat(inputField.innerText);
    return inputFieldValue;
}