function getAlert(){
    let count=0;
    for(let i=0; i<5; i++){
        if(document.getElementById(i+1).checked)
            count++
    }

    let name = document.getElementById("yourName").value

    alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`)
} 
