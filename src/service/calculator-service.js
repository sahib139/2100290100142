const axios = require("axios"); 
const {token} = require("../config/server_config");
const WindowSize = 10;
let windowPrevState = []
let windowCurrState = []
let avg = 0

class CalculatorService{

    async fetchNumbers (numberId, token) {
        try {
            const response = await axios.get(`http://20.244.56.144/test/${numberId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                timeout: 500
            });

            return response.data.numbers;
        } catch (error) {
            console.error(`Error fetching numbers: ${error}`);
            return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
        }
    }

    changeState(response){
        let newArray = response.filter(element => !windowCurrState.includes(element));
        newArray = newArray.slice(0,WindowSize);
        windowPrevState = windowCurrState;
        windowCurrState = newArray;
    
        const sum = windowCurrState.reduce((acc, cur) => acc + cur, 0);
        avg = sum/windowCurrState.length;
    }

    async Even(){
        try {
            const number = await this.fetchNumbers('even',token);
            this.changeState(number);
            console.log("hi");
            return {
                numbers:number,
                windowPrevState:windowPrevState,
                windowCurrState:windowCurrState,
                avg:avg,
            }
        } catch (error) {
            return new Error(error);
        }
    }

    async Fibo(){
        try {
            const number = await this.fetchNumbers('fibo',token);
            this.changeState(number);
            return {
                numbers:number,
                windowPrevState:windowPrevState,
                windowCurrState:windowCurrState,
                avg:avg,
            }
        } catch (error) {
            return new Error(error);
        }
    }

    async Prime(){
        try {
            const number = await this.fetchNumbers('primes',token);
            this.changeState(number);
            return {
                numbers:number,
                windowPrevState:windowPrevState,
                windowCurrState:windowCurrState,
                avg:avg,
            }
        } catch (error) {
            return new Error(error);
        }
    }

    async Rand(){
        try {
            const number = await this.fetchNumbers('rand',token);
            this.changeState(number);
            return {
                numbers:number,
                windowPrevState:windowPrevState,
                windowCurrState:windowCurrState,
                avg:avg,
            }
        } catch (error) {
            return new Error(error);
        }
    }
} 

module.exports = CalculatorService;