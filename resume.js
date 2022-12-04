function addNewWEField() {
    // console.log("adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    // console.log("hi");
    let nameField = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet");
    namet1.innerHTML = nameField;

    document.getElementById("namet2").innerHTML = nameField;

    document.getElementById("contactt").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addresst").innerHTML = document.getElementById("addressField").value;


    document.getElementById("fbt").innerHTML = document.getElementById("fbField").value;


    document.getElementById("instagramt").innerHTML = document.getElementById("instagramField").value;


    document.getElementById("linkedint").innerHTML = document.getElementById("linkedinField").value;

    document.getElementById("objectivet").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("wet").innerHTML = str;


    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let o of aqs) {
        str1 = str1 + `<li> ${o.value} </li>`;
    }

    document.getElementById("aqt").innerHTML = str1;


    let file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);



    reader.onloadend=function()
    {
        document.getElementById("imgtemplate").src=reader.result;
    }



    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
function printCV() 
{
    window.print();
}