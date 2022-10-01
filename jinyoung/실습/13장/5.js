function goSchool() {
  return new Promise((result) => {
    result("집에서 출발");
  });
}

function arriveSchool() {
  return new Promise((result, reject) => {
    setTimeout(() => {
      setTimeout(() => {
        result("학교에 도착");
      }, 1000);
    }, 1000);
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

async function sequence() {
  const first = await goSchool();
  console.log(first);
  const second = await arriveSchool();
  console.log(second);
  const third = await eatHaribo();
  console.log(third);
  const fourth = await studyWithProfessor();
  console.log(fourth);
}

sequence();
