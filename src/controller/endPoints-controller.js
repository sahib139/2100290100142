const axios = require("axios"); 
let windowPrevState = []
let windowCurrState = []
let avg = 0
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIzMjA1LCJpYXQiOjE3MTcyMjI5MDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFiZGE3ZWFjLWI3ZmMtNGYwMC1iNzJjLWQ4ZDc1Yjg1ZTczMCIsInN1YiI6ImFzaGlzaC4yMTI1aXQxMTc3QGtpZXQuZWR1In0sImNvbXBhbnlOYW1lIjoiS0lFVCBncm91cCBvZiBpbnN0aXR1dGlvbnMiLCJjbGllbnRJRCI6IjFiZGE3ZWFjLWI3ZmMtNGYwMC1iNzJjLWQ4ZDc1Yjg1ZTczMCIsImNsaWVudFNlY3JldCI6Ikxka2FBRkdxT05QZm5aTnAiLCJvd25lck5hbWUiOiJBc2hpc2ggQmhhdHQiLCJvd25lckVtYWlsIjoiYXNoaXNoLjIxMjVpdDExNzdAa2lldC5lZHUiLCJyb2xsTm8iOiIyMTAwMjkwMTMwMDQzIn0.HRrdb0pn2wbqPSWWXH1M7V0btFoZqhtWVjqTP7Q4PIg";
 

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