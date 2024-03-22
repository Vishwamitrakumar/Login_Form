let btn = document.querySelector("button");
btn.addEventListener("click", show);
function show() {
     let p = document.getElementById("pass").value;
     let a = document.getElementById("name").value;
     let m1 = document.getElementById("mm").value;
     let e = document.getElementById("e").value;
     if (p == "") {
          alert("Enter password");
          return false;
     }
     if (a == "") {
          document.getElementById("sp").innerText = "Enter name";
          return false;

     }
     if (m1 == "") {
          document.getElementById("m").innerText = "Enter Mobile Number";
          return false;
     }
     if (e == "") {
          document.getElementById("e1").innerText = "Enter Email-id";
          return false;
     }

}