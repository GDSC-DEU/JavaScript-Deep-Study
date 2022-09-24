const weather = ["맑은 날씨", "태풍"];

const value = Math.round(Math.random() * 1);

function goSchool() {
  return new Promise((resolve) => {
    resolve("집에서 출발");
  });
}

function arriveSchool() {
  return new Promise((resolve, reject) => {
    if (weather[value] === "맑은 날씨") {
      setTimeout(() => {
        setTimeout(() => {
          resolve("학교에 도착");
        }, 1000 * 60 * 30);
      }, 1000 * 60 * 30);
    } else if (weather[value] === "태풍") {
      reject();
    }
  });
}

function eatHaribo() {
  return new Promise((resolve) => {
    resolve("하리보 냠냠쩝쩝");
  });
}

function studyWithProfessor() {
  return new Promise((resolve) => {
    resolve("수업 시작");
  });
}

async function sequence() {
  const sequence1 = await goSchool();
  console.log(sequence1);
  const sequence2 = await arriveSchool();
  console.log(sequence2);
  const sequence3 = await eatHaribo();
  console.log(sequence3);
  const sequence4 = await studyWithProfessor();
  console.log(sequence4);
}

sequence().catch((err) => {
  console.log("자휴 후 집 도착");
});
