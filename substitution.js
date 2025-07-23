
document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('container');

        for (let i = 0; i < 26; i++) {
        const letterBox = document.createElement('div');
        letterBox.style.border = "1px solid black"
        letterBox.style.width = '40px';
        letterBox.style.height = '40px';
        letterBox.style.display = 'flex';
        letterBox.style.justifyContent = 'center';
        letterBox.style.alignItems = 'center';
        letterBox.style.fontWeight = 'bold';
        letterBox.style.userSelect = 'none';  // prevent text selection
        letterBox.textContent = String.fromCharCode(65 + i); // ASCII A=65
        container.appendChild(letterBox);
      }

      for (let i = 0; i < 26; i++) {
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.maxLength = 1;
        inputBox.style.width = '33px';
        inputBox.style.height = '33px';
        inputBox.style.textAlign = 'center';
        inputBox.style.fontSize = '18px';
        container.appendChild(inputBox);
      }
    });

document.getElementById("chal-5").addEventListener('click', () => {

    const inputs = document.querySelectorAll("#container input");
    const stringCon = document.getElementById("string");
    const string = "Qeb cixd zxk lcqbk yb exoa ql cfka fk x prypqfqrqflk zfmebo, yrq fq grpq qxhbp [mXqf3Kz3]. Fc vlr illh zilpbiv xq qeb mxqqbokp xka cobnrbkzfbp lc qeb ibqqbop, vlr'ii pqxoq ql pbb efkqp. Pljb ibqqbop xmmbxo jlob lcqbk qexk lqebop, xka zboqxfk zljyfkxqflkp tfii pqxka lrq. Pqxv clzrpba, qxhb vlro qfjb, xka bsbkqrxiiv, qeb jbppxdb tfii obsbxi fqpbic."
    let temp = ""

    let result = '';
    inputs.forEach(input => {
        result += input.value || '_';
    });

    let ran = false;
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < result.length; j++) {
            const upper = String.fromCharCode(65 + j);
            const lower = String.fromCharCode(97 + j);
            if ((string.charAt(i) == upper || string.charAt(i) == lower) && result.charAt(j) != '_') {
                let replacementChar = result.charAt(j);

                if (string.charAt(i) === upper) {
                    replacementChar = replacementChar.toUpperCase();
                } else {
                    replacementChar = replacementChar.toLowerCase();
                }

                temp += `<span style="text-decoration: underline;">${replacementChar}</span>`;
                ran = true;
            }
        }
        if (!ran) {
            temp += string.charAt(i);
        }
        ran = false
        
    }
    stringCon.innerHTML = temp;
    temp = '';

});