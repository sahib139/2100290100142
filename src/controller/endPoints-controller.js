const axios = require("axios"); 
const windowPrevState = []
const token="";
 

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


async function getEven(req,res){
    const response = await fetchNumbers('even',token);

    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
    
}
async function getPrime(req,res){
    const response = await fetchNumbers('primes',token);
    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
}
async function getRandom(req,res){
    const response = await fetchNumbers('rand',token);
    res.status(200).json({
        numbers:response,
        windowPrevState:windowPrevState,
        windowCurrState:[],
        avg:0
    })
}
async function getFibonacci(req,res){
    const response = await fetchNumbers('fibo',token);
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