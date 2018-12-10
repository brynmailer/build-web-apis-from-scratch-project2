let kicks = 
    [false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false];
let snares = 
    [false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false];
let hiHats = 
    [false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false];
let rideCymbals = 
    [false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false];

const toggleDrum = (array, index) => {
    if (!array || index === undefined || index < 0 || index > 15) {
        return;
    }
    
    if (array === 'kicks') {
        kicks[index] = !kicks[index];
    } else if (array === 'snares') {
        snares[index] = !snares[index];
    } else if (array === 'hiHats') {
        hiHats[index] = !hiHats[index];
    } else if (array === 'rideCymbals') {
        rideCymbals[index] = !rideCymbals[index];
    }
}

const clear = (array) => {
    if (!array) {
        return;
    }

    if (array === 'kicks') {
        falsify(kicks);
    } else if (array === 'snares') {
        falsify(snares);
    } else if (array === 'hiHats') {
        falsify(hiHats);
    } else if (array === 'rideCymbals') {
        falsify(rideCymbals);
    }
}

const invert = (array) => {
    if (!array) {
        return;
    }

    if (array === 'kicks') {
        invertArray(kicks);
    } else if (array === 'snares') {
        invertArray(snares);
    } else if (array === 'hiHats') {
        invertArray(hiHats);
    } else if (array === 'rideCymbals') {
        invertArray(rideCymbals);
    }
}

const invertArray = (array) => {
    for (let drum in array) {
        array[drum] = !array[drum];
    }
}

const falsify = (array) => {
    for (let drum in array) {
        array[drum] = false;
    }
}

const getNeighborPads = (x, y, size) => {
    debugger
    if (x >= size || y >= size || x < 0 || y < 0) {
        return [];
    }

    return (x >= 1 && x <= (size-2)) && (y >= 1 && y <= (size-2)) ? [[x-1, y], [x+1, y], [x, y-1], [x, y+1]] :
        (x === 0 && (y >= 1 && y <= (size-2))) ? [[x+1, y], [x, y-1], [x, y+1]] :
            (x === (size-1) && (y >= 1 && y <= (size-2))) ? [[x-1, y], [x, y-1], [x, y+1]] :
                (x >= 1 && x <= (size-2)) && y === 0 ? [[x-1, y], [x+1, y], [x, y+1]] :
                    (x >= 1 && x <= (size-2)) && y === (size-1) ? [[x-1, y], [x+1, y], [x, y-1]] :
                        (x === 0 && y === 0) ? [[x+1, y], [x, y+1]] :
                            (x === (size-1) && y === (size-1)) ? [[x-1, y], [x, y-1]] :
                                (x === (size-1) && y === 0) ? [[x-1, y], [x, y+1]] :
                                    (x === 0 && y === (size-1)) ? [[x+1, y], [x, y-1]] :
                                        [];
}