function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}


function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc)=>{
            items.push({
                id: doc.id,
                ...doc.data()
            })
        } )
        generateItems(items)
    }) 
}
    function generateItems(items){

        let itemsHTML = "";
        items.forEach((items)=>{
            console.log(items);

            itemsHTML += `
            <div class="todo-item">
            <div class="check">
                <div class="check-mark">
                    <img src="/images/icon-check.svg">
                </div>
            </div>
            <div class="todo-text">
                ${item.text}
            </div>
        </div>
               
            `
        })
        document.querySelector(".todo-items").innerHTML = itemsHTML;
        createEventListeners();

    }
     
    function createEventListeners(){
        let todoCheckMarks = document.querySelectorAll(".todo-items .check")
        todoCheckMarks.forEach((checkMark)=>{
            checkMark.addEventListener("click", function(){

            })

        })

    }
      
    function markCompleted(id){
        let item = db.collection("todo-items").doc(id);
        item.get().then(function(doc) {
            if (doc.exists) {
                if(doc.data().status == "active"){
                    item.update({
                        status: "completed"
                    })
                } else {
                    item.update({
                        status: "active"
                    })
                }
            }
        })
    }
getItems();