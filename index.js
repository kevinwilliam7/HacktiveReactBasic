let resultCalc
let arr_opnum = []
Array.prototype.forEach.call(document.getElementsByClassName("btn"), function(el) {
    document.getElementById(el.id).addEventListener('click', function handleClick() {
        let op_temp = ""
        let text = document.getElementById(el.id).innerText
        if(text==="CA") {
            clearAll()
        }
        else if(text==="CE") {
            clearEntry(document.getElementById("lcdinput"))
        } else if(text==="=") {
            result(arr_opnum)
        } else { 
            document.getElementById("lcdinput").append(text)
            op_temp = ""
            op_temp = op_temp + text
            saveNumericOperation(op_temp)
        }
    })
});
function clearAll() {
    resultCalc = ""
    arr_opnum = []
    document.getElementById("lcdinput").innerHTML = "";
    document.getElementById("lcdoutput").innerHTML = "";
}

function clearEntry(myinput) {
    let text = ""
    document.getElementById("lcdinput").innerHTML = ""
    document.getElementById("lcdoutput").innerHTML = ""
    arr_opnum.pop()
    arr_opnum.forEach(element => {
        text += element
    });
    document.getElementById("lcdinput").append(text)
}

function saveNumericOperation(numberoperation) {
    arr_opnum.push(numberoperation)
    console.log(arr_opnum)
}

function result(arr_opnum) {
    mergeText = ""
    arr_opnum.forEach(element => {
        mergeText = mergeText + element
    });
    resultCalc = eval(mergeText)
    document.getElementById("lcdoutput").innerHTML = "";
    document.getElementById("lcdoutput").append(resultCalc)
}