// Get the modal
var modal = document.getElementById('popupContact');

// Get the button that opens the modal
var btn = document.getElementById("btnAdd");
var editBtn = document.getElementByID("edit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the button that adds the card
var submit = document.getElementById("submit");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//when the user clicks the edit button on the card
editBtn.onclick = function(){
    modal.style.display = "block";
}

//adding user info card when submit button is clicked
submit.onclick = function(){
    document.getElementById("userCard").style.display = "block";
}
