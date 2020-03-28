function onOff(){
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")
}

function chekField(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){

         const checkIfIsString = typeof event.target[value] === "string";
         const checkIfIsEmpty = !event.target[value].value.trim();

         if(checkIfIsString && checkIfIsEmpty ){
             return true
         }
    })

    if(isEmpty) {
        event.preventDefault()
        alert("Por favor preenha todos os campos")
    }  
}