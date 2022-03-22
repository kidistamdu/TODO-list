function addItem(event){

    event.preventDefault();
    let text = document.getElementById("todo-input");
    db.collecton("todo").add({
        text: text.value,
        status: "active"
    })

}