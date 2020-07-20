function loginValid()
{
var name = document.getElementById("fname").value;
var pass = document.getElementById("pwd").value;
if (name == "")
{
window.alert("Please enter your name");
name.focus();
return false;
        }
   if ((name.length <= 2) || (name.length > 20)) {
    window.alert("**user length must be between 2 and 20");
    return false;
}
if (!isNaN(name)) {
    window.alert("**only characters are allowed");
    return false;
             }
    if (pass == "")
        {
            window.alert("Please enter your password");
            pass.focus();
            return false;
        }
    }