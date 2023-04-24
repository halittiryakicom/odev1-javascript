let username = prompt("Lütfen isminizi giriniz: ");
let NAME = document.querySelector("#myName");
NAME.innerHTML = username;


function tarihSaat() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    let dayName = days[date.getDay()];


    let tarih = document.querySelector("#myClock")
    tarih.innerHTML = `${hour}:${minute}:${second}  ${dayName}`
}
setInterval(tarihSaat, 1000); 


