class JavaScriptDeepStudy {
    constructor () {
        // 인스턴스를 따로 만들어서 인자에 필드 값을 넣어줘야하는 줄 알았는데 default 값으로 설정하는 것이었다..
        this.member = ["최정혜","손진영","김영주","김현지","윤한영","조진혁"]
        this.book = "자바스크립트 완벽가이드";
        this.sequence = [
            "1.checking Time",
            "2. Test Time",
            "3. Q&A Time",
            "4. Killing Time",
            "5. Revieew Time",
            "6. Next Time"
        ];
        this.state = "진행중"
        // 정혜님 좋아하는 과일은 default 값으로 설정해야 했다..! ㅜ
        this.JungHyeFavFruit = "strawbarry";
    }

    get isState() {
        return (
            console.log(this.state + "입니다. 만약 완료를 원한다면 setState 함수를 이용해주세요.")
        )
    }

    // 완료 state도 있어야할거 같았고 한번 완료 되면 변경되지 않으니 이렇게 구성했습니다.
    get setState() {
       this.state = "완료";
       return (console.log(this.state+ "중인 상태로 변경되었습니다."))
    }

    // Array 관련 메서드가 안먹혀서 for, if문으로 대체했습니다.
    // 리팩토링이 필요한 코드이니 조언 해주시면 감사드리겠습니다..!
    get isMember() {
        let memberCount = false;
        for(let i = 0; i < this.member.length; i++) {
            if(this.name === this.member[i]) {
                return console.log(true);  
            } else {
                count = true;
            } 
        }
        if(memberCount) {
            console.log("존재하지 않는 멤버입니다.");
        }    
    }
}

class Person extends JavaScriptDeepStudy {
    constructor (name, gender, age, favoriteLng, favFruit) {
        // 자식 클래스는 초기화 + 부모에 있는 필드들을 가져오기 위해 super() 해줘야 함
        super();
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.favoriteLng = favoriteLng;
        this.favFruit = favFruit;
    }

    // 모든 메서드 인자 넣어줄 필요 없으니 getter로 설정
   get isTwentyfive() {
        if(this.age+1 > 25 && typeof this.age === 'number') {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
   get twoYearsAgoAge() {
        if(typeof this.age === 'number') {
            return console.log(this.age - 2);
        } else {
            return console.log("숫자로 입력해주세요:)");
        }
    }
    // 그래서 이 메서드도 Person 클래스에 있는 favFruit랑 부모 클래스에 있는 
    // jungHyeFavFruit와 비교해야했다.
   get isEqualFruit() {
        if(this.favFruit === this.JungHyeFavFruit) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

let jinyoung = new Person("손진영", "man", 25, "typescript", "strawbarry");
let namju = new Person("김남주", "man", "23", "c", "melon");

jinyoung.isEqualFruit;
jinyoung.twoYearsAgoAge
jinyoung.isTwentyfive
jinyoung.isMember
jinyoung.isState
jinyoung.setState
console.log("----------------------------------");

// 위와 반대되는 결과

namju.isEqualFruit
namju.twoYearsAgoAge
namju.isTwentyfive
namju.isMember
