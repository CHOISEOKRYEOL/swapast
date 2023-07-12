function getCheck(){
    const query = 'input[class=check]:checked';
    const selectedElements = document.querySelectorAll(query);
    if(selectedElements.length == 1){
        document.querySelector('.btn').disabled = false;
        document.querySelector('.btn').classList.remove("false");
        document.querySelector('.btn').classList.add("true");
        document.querySelector('a').classList.remove("false");
        document.querySelector('a').classList.add("true");
    }else{
        document.querySelector('.btn').disabled = true;
        document.querySelector('.btn').classList.remove("true");
        document.querySelector('.btn').classList.add("false");
        document.querySelector('a').classList.remove("true");
        document.querySelector('a').classList.add("false");
    }
}