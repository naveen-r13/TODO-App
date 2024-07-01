function addtodo() {
  var input = document.getElementById("inputs");
  var text = input.value.trim();

  if (input !== "") {
    var li = document.createElement("li"); //"li"(createElement) will create a new li element
    li.textContent = text;

    var delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("delbtns"); //class name used to use in css
    delbtn.onclick = function () {
      li.remove();
    };

    li.appendChild(delbtn); // 1st added text will stay in 1st line next added texts will be come after that (delbutton)
    //examples: 1st txt hi 2nd txt guys these willcome one by one..

    document.getElementById("list").appendChild(li); // 1st added text will stay in 1st line next added texts will be come after that

    input.value = ""; //clrall the text in the list
  }
}