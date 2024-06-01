const axios = require("axios"); 
let windowPrevState = []
let windowCurrState = []
let avg = 0
const {token} = require("../config/server_config");
 

const fetchNumbers = async (numberId, token) => {
    try {
        const response = await axios.get(`http://20.244.56.144/test/${numberId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching numbers: ${error}`);
        return [];
    }
};

function changeState(response){
    const newArray = response.filter(element => !windowPrevState.includes(element));
    windowPrevState = windowCurrState;
    windowCurrState = newArray;

    const sum = windowCurrState.reduce((acc, cur) => acc + cur, 0);
    avg = sum/windowCurrState.length;
}

async function getEven(req,res){
    const response = await fetchNumbers('even',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:windowCurrState,
        avg:avg,
    })
    
}
async function getPrime(req,res){
    const response = await fetchNumbers('primes',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:windowCurrState,
        avg:avg,
    })
}
async function getRandom(req,res){
    const response = await fetchNumbers('rand',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:windowCurrState,
        avg:avg,
    })
}
async function getFibonacci(req,res){
    const response = await fetchNumbers('fibo',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:windowCurrState,
        avg:avg,
    })
}

module.exports= {
    getEven,
    getFibonacci,
    getPrime,
    getRandom,
}