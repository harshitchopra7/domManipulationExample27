function showDetails() {
    // taking values from the user
    const inputName = prompt("Enter Name")
    const inputAge = prompt("Enter Age")
    const inputGender = prompt("Enter Gender")

    // picking up HTML elements 
    const nameTag = document.getElementById("name")
    const ageTag = document.getElementById("age")
    const genderTag = document.getElementById("gender")

    // settin the HTML elements value
    nameTag.innerHTML = inputName
    ageTag.innerHTML = inputAge
    genderTag.innerHTML = inputGender
}

function hideDetails() {
     // picking up HTML elements 
     const nameTag = document.getElementById("name")
     const ageTag = document.getElementById("age")
     const genderTag = document.getElementById("gender")
 
     // settin the HTML elements value
     nameTag.innerHTML = ""
     ageTag.innerHTML = ""
     genderTag.innerHTML = ""
}