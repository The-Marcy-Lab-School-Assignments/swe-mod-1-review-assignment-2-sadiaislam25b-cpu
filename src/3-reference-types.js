const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

/*
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: If team2 were assigned with `const team2 = team1;`, team2 would just be a reference to the same object as team1. So changing team2.wins and team2.losses would also change team1.wins (50) and team1.losses (15).

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
*/

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;

// Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
console.log(team1.wins); // 45
console.log(team2.wins); // 50