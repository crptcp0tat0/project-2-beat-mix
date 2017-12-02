// Drum Arrays
let kicks = []
let snares = []
let hiHats = []
let rideCymbals = []

for (let loop = 0; loop < 16; loop++) {
  kicks.push(false)
  snares.push(false)
  hiHats.push(false)
  rideCymbals.push(false)
}

const toggleDrum = (array, index) => {
  if (Number.isInteger(index) && (index >= 0) && (index <= 16)) {
    if (array === 'kicks') {
      kicks[index] ? kicks[index] = false : kicks[index] = true;
    }

    if (array === 'snares') {
      snares[index] ? snares[index] = false : snares[index] = true;
    }

    if (array === 'hiHats') {
      hiHats[index] ? hiHats[index] = false : hiHats[index] = true;
    }

    if (array === 'rideCymbals') {
      rideCymbals[index] ? rideCymbals[index] = false : rideCymbals[index] = true;
    }
  }
};

const clear = (array) => {
  if (array === 'kicks') {
    kicks.fill(false)
  }

  if (array === 'snares') {
    snares.fill(false)
  }

  if (array === 'hiHats') {
    hiHats.fill(false)
  }

  if (array === 'rideCymbals') {
    rideCymbals.fill(false)
  }
};

const invert = (array) => {
  let temp = []
  if (array === 'kicks') {
    for (x = 0; x < kicks.length; x++) {
      kicks[x] = !kicks[x]
    }
  }

  if (array === 'snares') {
    for (x = 0; x < snares.length; x++) {
      snares[x] = !snares[x]
    }
  }

  if (array === 'hiHats') {
    for (x = 0; x < hiHats.length; x++) {
      hiHats[x] = !hiHats[x]
    }
  }

  if (array === 'rideCymbals') {
    for (x = 0; x < rideCymbals.length; x++) {
      rideCymbals[x] = !rideCymbals[x]
    }
  }
}
