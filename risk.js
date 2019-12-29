const [
  oWin,
  dWin,
  bothTie,
] = [ 'oWin', 'dWin', 'bothTie' ].map(Symbol);

let progress = 0;

const outcomes = {
  offense: 0,
  defense: 0,
  tie: 0,
};

/**
 * Possible outcomes
 * Offense loses 2 men
 * Both lose 1
 * Defense loses 2
 *
 * Take lowest die from offence and discard it
 */

const outcomeFor = (offenseRoll, defenseRoll) => {
  const oSorted = [ ...offenseRoll ].sort();
  const dSorted = [ ...defenseRoll ].sort();

  const [ oA, oB ] = oSorted;
  const [ dA, dB ] = dSorted;

  let oWins = 0;
  let dWins = 0;

  if (dA >= oA) {
    dWins++;
  } else {
    oWins++;
  }

  if (dB >= oB) {
    dWins++;
  } else {
    oWins++;
  }

  if (oWins === dWins) {
    return bothTie;
  } else if (oWins > dWins) {
    return oWin;
  } else {
    return dWin;
  }
}

for (let i = 1; i <= 6 ; ++i) {
for (let j = 1; j <= 6 ; ++j) {
for (let k = 1; k <= 6 ; ++k) {
for (let l = 1; l <= 6 ; ++l) {
for (let m = 1; m <= 6 ; ++m) {
  ({
    [bothTie]: () => {
      outcomes.tie++;
    },
    [oWin]: () => {
      outcomes.offense++;
    },
    [dWin]: () => {
      outcomes.defense++;
    },
  })[outcomeFor([ i, j, k ], [ l, m ])]();
}}}}}

console.log(outcomes);
