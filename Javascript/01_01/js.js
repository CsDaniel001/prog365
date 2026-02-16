export function Fuggveny() {
    const abc_angol = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let adat = document.getElementsByClassName('.input').value;
    let szamlalo = 0;

    if (abc_angol.includes(adat)) {
        
        loop1 : abc_angol.forEach(element => {
            szamlalo++;
            if(element===adat){console.log(szamlalo);break loop1;}

        });
        
    }
    else {
        console.log('érvénytelen adat: 0')
    }



}