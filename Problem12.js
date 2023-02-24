let fibo = 0

function dzialanie(max, maxDzielnik) {
    for (let liczba = 1; liczba < max; liczba++) {

        fibo = fibo + liczba
        let dzielnikcounter = 1
        for (let dzielnik = 1; dzielnik < maxDzielnik; dzielnik++) {
            if (fibo % dzielnik == 0) {

                dzielnikcounter = dzielnikcounter + 1

                
                if(dzielnikcounter == 500){
                    return console.log(fibo);
                }
            }
            
        }
        
    }
}


dzialanie(10000000, 1000000)