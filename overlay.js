function show(){

    let btnDetail=document.getElementById("button")
     console.log(btnDetail);
     let btnText=btnDetail.innerText;
     console.log(btnText);
     let paraTag= document.getElementById("content")
     console.log(paraTag);

    if(btnText=="Click Me"){
        let btnText=btnDetail.innerText;
        console.log(btnText);
        paraTag.innerText="Nidhi Verma"
        btnDetail.innerText="Unclick me"
    }
    else{
        let btnText=btnDetail.innerText;
        console.log(btnText);
        paraTag.innerText=" "
        btnDetail.innerText="Click Me"
    }
}
