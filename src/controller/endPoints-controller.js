const axios = require("axios"); 
let windowPrevState = []
let windowCurrState = []
let avg = 0
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIyNzMxLCJpYXQiOjE3MTcyMjI0MzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBkMGRlNzA2LTM2MTItNGYzZS04NTNiLTFkM2M2NWQ5Y2RkOSIsInN1YiI6InZhaWJoYXYuMjEyNWNzbWUxMDI4QGtpZXQuZWR1In0sImNvbXBhbnlOYW1lIjoiS0lFVCBncm91cCBvZiBJbnN0aXR1dGlvbiIsImNsaWVudElEIjoiMGQwZGU3MDYtMzYxMi00ZjNlLTg1M2ItMWQzYzY1ZDljZGQ5IiwiY2xpZW50U2VjcmV0IjoibWxoRmFqa0tucFdKSGZ2WSIsIm93bmVyTmFtZSI6IlZhaWJoYXYgUGFuaml5YXIiLCJvd25lckVtYWlsIjoidmFpYmhhdi4yMTI1Y3NtZTEwMjhAa2lldC5lZHUiLCJyb2xsTm8iOiIyMTAwMjkxNTMwMDU2In0.0Nt2_QM31wLzaJQnDG4ZYZVG9DeX1pWpMSy4LGh5tNg";
 

const fetchNumbers = async (numberId, token) => {
    try {
        const response = await axios.get(`http://20.244.56.144/test/${numberId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
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
        avg:avg
    })
    
}
async function getPrime(req,res){
    const response = await fetchNumbers('primes',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
}
async function getRandom(req,res){
    const response = await fetchNumbers('rand',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
}
async function getFibonacci(req,res){
    const response = await fetchNumbers('fibo',token);

    changeState(response);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
}

module.exports= {
    getEven,
    getFibonacci,
    getPrime,
    getRandom,
}