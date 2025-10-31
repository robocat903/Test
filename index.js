let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("Name").value
    document.getElementById("h1").textContent = `Welcome ${username}`
}  