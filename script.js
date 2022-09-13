function validateAge(today, dobobj) {
    var age = today.getFullYear() - dobobj.getFullYear();
    var m = today.getMonth() - dobobj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobobj.getDate())) {
      age--;
    }
    return age;
  }
  let dobelement = document.getElementById("dob");
  dobelement.addEventListener("change", () => {
    let [y,m,d] = document.getElementById("dob").value.split("-");
    let dob = new Date(y,m,d);
    let Today = new Date();
    age = validateAge(Today, dob);
    if (age < 18 || age > 55) {
      dobelement.setCustomValidity("age must lie in 18 and 55 years!!!");
   
      return;
    } else {
      dobelement.setCustomValidity("");
    }
  });
  let form = document.getElementById("user-form");
  