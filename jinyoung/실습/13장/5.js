const weather = ["맑은 날씨", "태풍"];

const value = Math.round(Math.random() * 1);

function goSchool() {
  return new Promise((result) => {
    result("집에서 출발");
  });
}

function arriveSchool() {
  return new Promise((result, reject) => {
    if (weather[value] === "맑은 날씨") {
      setTimeout(() => {
        setTimeout(() => {
          result("학교에 도착");
        }, 1000 * 60 * 30);
      }, 1000 * 60 * 30);
    } else if (weather[value] === "태풍") {
      reject();
    }
  });
}

function eatHaribo() {
  return new Promise((result) => {
    result("하리보 냠냠쩝쩝");
  });
}

function studyWithProfessor() {
  return new Promise((result) => {
    result("수업 시작");
  });
}

goSchool()
  .then((sequence1) => {
    console.log(sequence1);
    return arriveSchool("맑은 날씨");
  })
  .then((sequence2) => {
    console.log(sequence2);
    return eatHaribo();
  })
  .then((sequence3) => {
    console.log(sequence3);
    return studyWithProfessor();
  })
  .then((sequence4) => {
    console.log(sequence4);
  })
  .catch((err) => {
    console.log("자휴 후 집 도착");
  });
