const CalculatorService = require("../service/calculator-service");
const calculatorService = new CalculatorService();

async function getEven(req,res){
    try {
        const reponse = await calculatorService.Even();
        res.status(200).json({
            numbers:response.numbers,
            windowPrevState:response.windowPrevState,
            windowCurrState:reponse.windowCurrState,
            avg:response.avg,
        })
    } catch (error) {
        res.status(500).json({
            message:`Unable to fetch the response due to ${error}`
        });
    }
}
async function getPrime(req,res){
    try {
        const reponse = await calculatorService.Prime();
        res.status(200).json({
            numbers:response.numbers,
            windowPrevState:response.windowPrevState,
            windowCurrState:reponse.windowCurrState,
            avg:response.avg,
        })
    } catch (error) {
        res.status(500).json({
            message:`Unable to fetch the response due to ${error}`
        });
    }
}
async function getRandom(req,res){
    try {
        const reponse = await calculatorService.Rand();
        res.status(200).json({
            numbers:response.numbers,
            windowPrevState:response.windowPrevState,
            windowCurrState:reponse.windowCurrState,
            avg:response.avg,
        })
    } catch (error) {
        res.status(500).json({
            message:`Unable to fetch the response due to ${error}`
        });
    }
}
async function getFibonacci(req,res){
    try {
        const reponse = await calculatorService.Fibo();
        res.status(200).json({
            numbers:response.numbers,
            windowPrevState:response.windowPrevState,
            windowCurrState:reponse.windowCurrState,
            avg:response.avg,
        })
    } catch (error) {
        res.status(500).json({
            message:`Unable to fetch the response due to ${error}`
        });
    }
}

module.exports= {
    getEven,
    getFibonacci,
    getPrime,
    getRandom,
}