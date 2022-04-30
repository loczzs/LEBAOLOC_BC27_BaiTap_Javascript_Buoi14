function sos() {
    var firstnumberEl = + document.getElementById("firstnumber").value
    var secondnumberEl = + document.getElementById("secondnumber").value
    var thirdnumberEl = + document.getElementById("thirdnumber").value
    if (firstnumberEl > secondnumberEl && secondnumberEl > thirdnumberEl) {
        var maxNumber = firstnumberEl
        var midNumber = secondnumberEl
        var minNumber = thirdnumberEl
    }else if ( firstnumberEl > thirdnumberEl && thirdnumberEl > secondnumberEl ){
        var maxNumber = firstnumberEl
        var midNumber = thirdnumberEl
        var minNumber = secondnumberEl
    }else if (secondnumberEl > firstnumberEl && firstnumberEl > thirdnumberEl){
        var maxNumber = secondnumberEl
        var midNumber = firstnumberEl
        var minNumber = thirdnumberEl
    }else if (secondnumberEl > thirdnumberEl && thirdnumberEl > firstnumberEl){
        var maxNumber = secondnumberEl
        var midNumber = thirdnumberEl
        var minNumber = firstnumberEl
    }else if (thirdnumberEl > firstnumberEl && firstnumberEl > secondnumberEl){
        var maxNumber = thirdnumberEl
        var midNumber = firstnumberEl
        var minNumber = secondnumberEl
    }else if (thirdnumberEl > secondnumberEl && secondnumberEl > firstnumberEl){
        var maxNumber = thirdnumberEl
        var midNumber = secondnumberEl
        var minNumber = firstnumberEl
    }else if (firstnumberEl === secondnumberEl && secondnumberEl === thirdnumberEl){
        var maxNumber = firstnumberEl
        var midNumber = secondnumberEl
        var minNumber = thirdnumberEl
    }else{
        var maxNumber = NaN
        var midNumber = NaN
        var minNumber = NaN
    }
    document.getElementById("result").innerHTML = ` 👉 ${minNumber} < ${midNumber} < ${maxNumber}`
    
}