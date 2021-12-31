"use strict";

// 설명.. DATA
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 배열 구조분해 할당
const [players1, players2] = game.players;

// 배열 첫번째 아이템에만 다른 변수값 주기
const [gk, ...fieldPlayers] = players1;

// 모든 선수를 가져온다
const allPlayers = [...players1, ...players2];

// 교체 선수 3명 추가
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// 객체 속의 객체 구조분해할당
const {
  odds: { team1, x: draw, team2 },
} = game;

// rest파라미터 : 인자들을 배열로 가져온다
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

// &&(falsy 출력)와 ||(truthy 출력)
team1 < team2 && console.log("TEAM 1 is about to win");
