// Strategy pattern - It is a pattern where you encapsulate a family (similar) of Stratageis ( which are functions)

const FedEx = function(parcel) {
    // some FedEx cal...
    this.calculate = 2.55
}

const UPS = function(parcel) {
    // some UPs cal...
    this.calculate = 3.24
}

const SpeedPost = function(parcel) {
    // some SpeedPost cal...
    this.calculate = 4.55
}

const Strategy = function() {
    this.company = ''
    this.assignCompany = (company) => {
        this.company = company
    }
    this.getPrice = () => {
        return this.company.calculate
    }
}

const fedex = new FedEx()
const ups = new UPS()
const speedPost = new SpeedPost()

const strategy = new Strategy()

strategy.assignCompany(fedex)
console.log(strategy.getPrice())

strategy.assignCompany(ups)
console.log(strategy.getPrice())

strategy.assignCompany(speedPost)
console.log(strategy.getPrice())