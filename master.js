window.onload = function() {
    let myelement = document.querySelector(".element.current");
    let addedinput = document.querySelectorAll("input")[0];
    let removeinput = document.querySelectorAll("input")[1];
    let classarray = [];

    addedinput.onblur = function() {
        let classinput = addedinput.value.trim();
        if (classinput === "") {
            window.alert("Please enter a classname");
        } else {
            myelement.classList.add(classinput);
            let body = document.getElementById("classlist");

            classarray.push(classinput); // Add classinput to classarray without extra spaces
            let value1 = classarray.sort().join(" ");
            console.log(value1);
            body.textContent = value1;
        }
        addedinput.value = ""; 
    };

    removeinput.onblur = function() {
        let classrinput = removeinput.value.trim();
        if (classrinput === "") {
            window.alert("Please enter a class to remove");
        } else {
            myelement.classList.remove(classrinput);
            let body = document.getElementById("classlist");

            classarray = classarray.filter(item => item !== classrinput); 
            let value2 = classarray.sort().join(" ");
            console.log(value2);
            body.textContent = value2;
        }
        removeinput.value = ""; 
    };
};
