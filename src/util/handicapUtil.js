import Constants from '../constants'

export const calculateHandicap = (values) => {
    let hds = getHandicapDifferentials(values)
    return calculateHandicapFromDifferentials(hds)
}

export const getHandicapDifferentials = (values) => {
    return Object.keys(values)
    .filter( value => value.startsWith(Constants.GROSS) && values[value] !== "")
    .map( key => {
        return calculateHandicapDifferential(values[key], values[key.replace(Constants.GROSS, Constants.CSS)], values[Constants.SLOPE], values[Constants.SSS])
    })
}

export const calculateHandicapDifferential = (gross, css, slope, sss) => {
    return round((Constants.SLOPE_DIVISOR / (slope || Constants.DEFAULT_SLOPE)) * (gross - sss - (css ? (css - sss) : Constants.DEFAULT_CSS)), 1)
}

export const calculateHandicapFromDifferentials = (hds) => {
    hds.sort(sort)
    let numRounds = hds.length
    if(numRounds >= 3){
        if(numRounds === 3){
            return hds[0] - 2
        }else if(numRounds === 4){
            return hds[0] - 1
        }else if(numRounds === 5){
            return hds[0]
        }else if(numRounds === 6){
            return average([hds[0], hds[1]]) - 1
        }else if(numRounds <= 8){
            return average([hds[0], hds[1]])
        }else if(numRounds <= 11){
            return average([hds[0], hds[1], hds[2]])
        }else if(numRounds <= 14){
            return average([hds[0], hds[1], hds[2], hds[3]])
        }else if(numRounds <= 16){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4]])
        }else if(numRounds <= 18){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5]])
        }else if(numRounds === 19){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5], hds[6]])
        }else{
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5], hds[6], hds[7]])
        }
    }else{
        return 0
    }
}

export const average = (values) => {
    if(values.length){
        return values.reduce((a, b) => a + b) / values.length
    }
    return 0
}

export function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export const sort = (a, b) => a - b