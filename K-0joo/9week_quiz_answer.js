class JavaScriptDeepStudy { // class 선언 법 : Class 클래스명 {}
    constructor(name, book, process, member){ // constructor : 클래스의 생성자 함수를 의미
        this.name = name;
        //["최정혜", "김영주", "김현지", "손진영", "조진혁", "윤한영"];
        this.book = "자바스크립트완벽가이드7판";
        this.process = process;
        //["진행", "진행", "진행", "진행", "진행", "잠시 중단"];
        this.member = ["최정혜", "김영주", "김현지", "손진영", "조진혁", "윤한영"];
    }

    CurrentProcess(){
        console.log("현재 진행 상태는 " + this.process + "중 입니다.");
    }

    FindSpy(member){
        if(member === true){
            console.log("최강 JavaScript 멤버 ★");
        } else {
            console.log("찾았다! 스파이!");
        }
    }
}

class Person extends JavaScriptDeepStudy { // 다른 클래스를 상속하는 서브 클래스를 정의할 때는 Class 키워드와 함께 extends 키워드를 사용함.
    constructor(name, gender, age, favoritLanguage, favoritFruit){
        super();
        this.name = name;
        this.gender = gender;
        // ["여", "여", "여", "남", "남", "남"];
        this.age = age;
        // ["25", "24", "23", "25", "22", "25"];
        this.favoritLanguage = favoritLanguage
        //["JavaScript", "JavaScript", "JavaScript", "JavaScript", "TypeScript", "JavaScript"];
        this.favoritFruit = favoritFruit
        // ["StrawBerry", "StrawBerry", "StrawBerry", "Apple", "Grape", "Orange"];

    }

    twentyFive() {
        if(this.age + 1 > 25 || this.age === 25){
            console.log("청춘은 바로 지금부터~ 청바지~");
            return Number(this.age) + 1;
        } else {
            console.log("반오십을 향해 달려가는 중..");
        }
        
    }

    PastOfTwoYears() {
        console.log("2년 전 나이는" , this.age - 2 , "살~! 이 때 참 좋았죠");
    }

    LoveJH(){
        if(this.favoritFruit === "StrawBerry"){
            console.log("딸기 좋앙♥");
        } else {
            console.log("안타깝게도 저희와 함께 할 수 없습니다.");
        }
    }
}

let YoungJoo = new Person("김영주", "여", "24", "JavaScript", "StrawBerry");

console.log(YoungJoo.twentyFive());
console.log(YoungJoo.PastOfTwoYears());
console.log(YoungJoo.LoveJH());
console.log('------------');
// ㅠ0ㅠ 죄송합니다 흑흑흑....기억에서 지워주세요