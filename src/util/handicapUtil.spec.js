import * as util from './handicapUtil'

describe("Handicap Util Tests", ()=>{
    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, 0, 125, 73)).toEqual(19.0)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, undefined, 125, 73)).toEqual(19.0)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, "", 125, 73)).toEqual(19.0)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, undefined, undefined, 73)).toEqual(19.0)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, "", "", 73)).toEqual(19.0)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, 72, 125, 73)).toEqual(19.9)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, 74, 125, 73)).toEqual(18.1)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, 75, 125, 73)).toEqual(17.2)
    })

    it('Should calculate correct handicap differentials',()=>{
        expect(util.calculateHandicapDifferential(94, 76, 125, 73)).toEqual(16.3)
    })

    it('Should calculate correct average',()=>{
        expect(util.average([94, 76, 125, 73])).toEqual(92)
    })

    it('Should calculate correct average',()=>{
        expect(util.average([1, 2, 3, 4, 5, 6, 7])).toEqual(4)
    })

    it('Should calculate correct average',()=>{
        expect(util.average([])).toEqual(0)
    })

    it('Should calculate correct average',()=>{
        expect(util.average([4])).toEqual(4)
    })

    it('Should calculate correct average',()=>{
        expect(util.average([19.1, 18.3, 17.1, 18.0])).toEqual(18.125)
    })

    it('Should sort arrat from lowest to highest',()=>{
        let arr = [19.1, 18.3, 17.1, 18.0]
        expect(arr.sort(util.sort)).toEqual([17.1, 18.0, 18.3, 19.1])
    })

    it('Should sort arrat from lowest to highest',()=>{
        let arr = []
        expect(arr.sort(util.sort)).toEqual([])
    })
    
    it('Should sort arrat from lowest to highest',()=>{
        let arr = [1]
        expect(arr.sort(util.sort)).toEqual([1])
    })
    
    it('Should sort arrat from lowest to highest',()=>{
        let arr = [-1, -49, -7, 9]
        expect(arr.sort(util.sort)).toEqual([-49, -7, -1, 9])
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = []
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(15.0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(16.0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(17.0)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([17.0, 18.0]) - 1)
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([17.0, 15.0]))
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([17.0, 15.0]))
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.5, 17.0, 15.0]))
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.5, 17.0, 15.0]))
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.5, 17.0, 15.0]))
    })
    
    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7, 18.7]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7, 18.7, 16.7]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7, 16.7]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7, 18.7, 16.7, 18.3]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7, 16.7]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7, 18.7, 16.7, 18.3, 15.3]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7, 16.7, 15.3]))
    })

    it('Should calculate correct handicap from score differentials',()=>{
        let hds = [19.0, 18.0, 17.0, 22.0, 19.5, 23.0, 15.0, 19.2, 14.5, 17.1, 17.1, 14.6, 27.0, 21.1, 14.7, 18.7, 16.7, 18.3, 15.3, 15.1]
        expect(util.calculateHandicapFromDifferentials(hds)).toEqual(util.average([14.6, 14.5, 17.0, 15.0, 14.7, 16.7, 15.3, 15.1]))
    })
})