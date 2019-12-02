import Constants from '../constants'

export const calculateHandicap = (values) => {
    let hds = getHandicapDifferentials(values)
    let numRounds = hds.length
    hds.sort((a, b) => a - b)
    
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

export const getHandicapDifferentials = (values) => {
    return Object.keys(values)
    .filter( value => value.startsWith(Constants.GROSS) && values[value] !== "")
    .map( key => {
        return calculateHandicapDifferential(key, values)
    })
}

export const calculateHandicapDifferential = (key, values) => {
    let gross   = values[key] 
        let css     = values[key.replace(Constants.GROSS, Constants.CSS)] || Constants.DEFAULT_CSS
        let slope   = values[Constants.SLOPE] || Constants.DEFAULT_SLOPE
        let sss     = values[Constants.SSS]
        return (Constants.SLOPE_DIVISOR / slope) * (gross - sss - css)
}

export const average = (values) => {
    if(values.length){
        return values.reduce((a, b) => a + b) / values.length
    }
    return 0
}