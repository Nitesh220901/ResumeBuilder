

function addNewWEField() {
    let newNode = document.createElement('textarea')
    newNode.classList.add("form-control", "weField", "mt-1")

    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', "Enter here")





    let weOb = document.getElementById("we")   //for work experience 
    let weAddButtonOb = document.getElementById("weAddButton")   // button


    weOb.insertBefore(newNode, weAddButtonOb)

}

function addNewAQField() {
    newNode = document.createElement('textarea')
    newNode.classList.add("form-control", "aqField", "mt-1")

    newNode.setAttribute('rows', 3)
    newNode.setAttribute('placeholder', "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)


}




// genrating CV function


function generateCV() {

    // setting name 
    let nameField = document.getElementById("nameField").value
    let nameTemplate1 = document.getElementById("nameTemplate1")
    nameTemplate1.innerText = nameField

    document.getElementById("nameTemplate2").innerText = nameField

    //  setting contact
    document.getElementById("contactTemplate").innerText = document.getElementById("contactField").value

    // setting  address
    document.getElementById("addressTemplate").innerText = document.getElementById("addressField").value

    document.getElementById("fbTemplate").innerText = document.getElementById("fbField").value

    document.getElementById("instaTemplate").innerText = document.getElementById("instaField").value

    document.getElementById("linkedTemplate").innerText = document.getElementById("linkedField").value


    //  setting objective 
    document.getElementById("objectiveTemplate").innerHTML = document.getElementsByClassName("objectiveField")[0].value



    // work experience 

    let workExperience = document.getElementsByClassName("weField")

    let str = ""
    for (let e of workExperience) {
        str = str + `<li> ${(e.value)} </li>`
    }

    document.getElementById("weTemplate").innerHTML = str;


    // acadameic qualification

    let acadameicQualification = document.getElementsByClassName("aqField")

    let str2 = ""
    for (let e of acadameicQualification) {
        str2 = str2 + `<li> ${(e.value)} </li>`
    }

    document.getElementById("aqTemplate").innerHTML = str2;


    //  setting image 
// console.log("imgfief")
    
    let file = document.getElementById('imgField').files[0]
// console.log("imgfief")
    let reader = new FileReader()  //for reading the image file
    reader.readAsDataURL(file)

    //  setting image 
    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result
    }

    // showing resume form 
    document.getElementById("cv-form").style.display = "none"
    document.getElementById("cv-template").style.display = "block"

}

function printCV() {
    window.print();
}