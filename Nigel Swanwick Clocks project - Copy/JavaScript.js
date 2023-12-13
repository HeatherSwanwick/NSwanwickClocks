
// clock code from https://ide.geeksforgeeks.org/online-html-editor/8d98620f-8daa-4168-a1f7-38898c23c383
setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);




function validateForm() {
  let x = document.getElementById("name").value;
  if (x == "") {
    alert("Please fill in all fields");
    return false;
  } else if (document.getElementById("surname").value == "") {
    alert("Please fill in all fields");
    return false;
  } else if(document.getElementById("email").value == "") {
    alert("Please fill in all fields");
    return false;
  } else {
	return true;
	}
}