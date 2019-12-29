const [ OFFENSE, DEFENSE, TRADE, ] = [ 'OFFENSE', 'DEFENSE', 'TRADE' ].map(Symbol);
const outcomeFor = (offenseRolls, defenseRolls) => {
  const oSorted = [ ...offenseRolls ].sort().reverse();
  const dSorted = [ ...defenseRolls ].sort().reverse();

  const [ oA, oB ] = oSorted;
  const [ dA, dB ] = dSorted;

  const [ oWins, dWins ] = [
    [ oA, dA ],
    [ oB, dB ],
  ].reduce(
    ([ oAcc, dAcc ], [ oRoll, dRoll ]) => [
      oAcc + (oRoll > dRoll ? 1 : 0),
      dAcc + (dRoll >= oRoll ? 1 : 0),
    ],
    [ 0, 0 ],
  );

  if (oWins === dWins) {
    return TRADE;
  } else if (oWins > dWins) {
    return OFFENSE;
  } else {
    return DEFENSE;
  }
}

const outcomes = {
  offense: 0,
  defense: 0,
  trade: 0,
};

for (let i = 1; i <= 6 ; ++i) {
for (let j = 1; j <= 6 ; ++j) {
for (let k = 1; k <= 6 ; ++k) {
for (let l = 1; l <= 6 ; ++l) {
for (let m = 1; m <= 6 ; ++m) {
  ({
    [TRADE]: () => outcomes.trade++,
    [OFFENSE]: () => outcomes.offense++,
    [DEFENSE]: () => outcomes.defense++,
  })[outcomeFor([ i, j, k ], [ l, m ])]();
}}}}}

console.log(outcomes);
