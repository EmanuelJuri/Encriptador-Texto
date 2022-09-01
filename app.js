// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// alura → ai l ufat r ai

const inputText = document.querySelector('#input')
const outputText = document.querySelector('#output')
const msgEmpty = document.querySelector('.msg-empty')
const outputGroup = document.querySelector('.output-group')


function encrypt(str){
    const matrixCode= [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    let strencrypt = str.toLowerCase()
    
    for (let i = 0; i < matrixCode.length; i++) {
        if(strencrypt.includes(matrixCode[i][0])){
            strencrypt= strencrypt.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }  
    return strencrypt;
};

function decrypt(str){
    const matrixCode= [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    let strdecrypt = str.toLowerCase()
    
    for (let i = 0; i < matrixCode.length; i++) {
        if(strdecrypt.includes(matrixCode[i][1])){
            strdecrypt= strdecrypt.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }  
    return strdecrypt;
};

function handleEncrypt(){
    outputText.value = encrypt(inputText.value)
    outputText.style.background = '#FACFCF'
    // inputText.value = ''
};

function handleDecrypt(){
    outputText.value = decrypt(inputText.value)
    outputText.style.background = '#CFFADB'
    // inputText.value = ''
}

function handleCopy(){
    outputText.select()
    console.log('##select##', outputText.value ? outputText.value : 'nada por aqui')
    if(outputText.value){
        navigator.clipboard.writeText(outputText.value)
        inputText.value = ''
        outputText.value = ''
        outputText.style.background = '#E9ECF8'
        return swal({
            title: "Portapapeles",
            text: "Texto copiado",                            
            button: "Ok",
            });  
    }
    show()
}

if(!inputText.value){
    outputGroup.style.display = 'none'
}

if (inputText.addEventListener) {
    inputText.addEventListener('input', function() {
        // event handling code for sane browsers        
        msgEmpty.style.display = 'none'
        outputGroup.style.display = 'block'
  }, false);
} else if (inputText.attachEvent) {
  inputText.attachEvent('onpropertychange', function() {
    // IE-specific event handling code    
    msgEmpty.style.display = 'none'
    outputGroup.style.display = 'block'
  });
}

function show(){
    swal({
        title: "Portapapeles",
        text: "Aún no hay nada para copiar",                            
        button: "Ok",
        });                        
}