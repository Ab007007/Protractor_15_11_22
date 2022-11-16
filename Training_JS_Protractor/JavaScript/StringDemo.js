//verify valid email id
/*
1. it should have only one . or _ before @
2. it should have only one @
3. it should end with .com or .co.in
*/
const emailId = "aru03.info@gmail.com"

if((emailId.endsWith('.com') || emailId.endsWith('.co.in')) && 
    (emailId.indexOf('@') == emailId.lastIndexOf('@')) && 
    (emailId.indexOf('.') == emailId.lastIndexOf('.', emailId.indexOf('@'))))
{
    console.log(`This mail id ${emailId} is valid`);
}
else {
    console.log(`This mail id ${emailId} is in-valid`);
}
