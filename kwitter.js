function adduser(){

    User_name = document.getElementById("username").value ; 
    localStorage.setItem("User_name",User_name);

    window.location = "kwitterroom.html";
}