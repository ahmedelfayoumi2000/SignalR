
document.addEventListener("DOMContentLoaded", function () {

    var messageInp = document.getElementById("message");

    var userName = prompt("Please Enter Your Name");

    messageInp.focus();

    /// Define Connection 
    var proxyConnection = new signalR.HubConnectionBuilder().withUrl('/chat').build(); // Create Proxy
    
    //Start Connection
    proxyConnection.start().then(function () {

        console.log("Connection Started Successfully");

        document.getElementById("sendMessage").addEventListener("click", function (event) {

            event.preventDefault();

            proxyConnection.invoke("send", userName, messageInp.value);
            console.log(proxyConnection.connectionId)
            messageInp.value = "";
            messageInp.focus();

        });

    }).catch(error => {
        console.log(error);
    });

    proxyConnection.on("ReceiveMessage", function (user, message) {

        var liElement = document.createElement('li');
        liElement.innerHTML = `<strong>${user}: </strong> ${message}`;
        document.getElementById("conversation").appendChild(liElement);

    });

});