const javaCopyButton = document.getElementById('copy-java');
const javaInputIp = document.getElementById('java-ip');

javaCopyButton.addEventListener("click", myFunction);

function myFunction() {
    try{
        navigator.clipboard.writeText(javaInputIp.value);
        javaCopyButton.textContent = "copied!";
    }catch{
        console.log('failed to copy');
    }
}