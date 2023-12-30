const maskify = (string) => {

    const masked = string.split("")

    const replaced = masked.reverse().map((el, idx, arr) => {
if(idx > 3){
    return el.replace(el, "#")
} else {
    return el
}

    }).reverse().join("")

    return replaced
}


console.log(maskify("12345"));
