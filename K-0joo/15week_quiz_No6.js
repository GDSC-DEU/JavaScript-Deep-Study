function GotoSchool(){ // async는 function 앞에 위치, 항상 프라미스를 반환
    return new Promise((resolve, reject) => {
        resolve("집에서 출발!");
    })

}

function School() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("학교 도착~"); 
        }, 3000)  // 30분 3초로 생략
    })
}

const weather = ['hurricane', 'sunny day'];

const randomWeather = weather[Math.floor(Math.random() * weather.length)];

function EatHaribo() {
    return new Promise((resolve, reject) => {
        if(randomWeather === 'sunny day'){
            setTimeout(() => {   
                resolve("하리보 냠냠 :D"); 
            });
        } else if (randomWeather === 'hurricane') {
            reject("헉 태풍이라니 자휴해야겠당");
        }
    })
}

function StartClass() {
    return new Promise((resolve, reject) => {
        resolve("수업");
    })
}

async function startGotoSchool(){
    try {
        const out = await GotoSchool();
        console.log(out);
        const arrive = await School();
        console.log(arrive);
        const eat = await EatHaribo();
        console.log(eat);
        const nojam = await StartClass();
        console.log(nojam);
    } catch(e){
        console.log(e);
        console.log("집도착~!");
    }
}

startGotoSchool();