const express = require('express');
const app = express();
const axios = require('axios').default;
const cors = require('cors');
const needle = require('needle');
app.listen(8080,()=>{
    console.log('Listening to port 8080')
});
const streamTweets = ()=>{
    const stream  = needle.get('https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at',{
        headers:{
            "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
        },
    })

    stream.on('data',(data)=>{
        console.log(data);
        try{
            const json = JSON.parse(data)
            console.log(json)
            console.log(Date.now())
        }catch(e){
            console.log(e)
        }
    });
}
streamTweets();
app.use(cors());
app.get('/',(req,res)=>{
    axios.get(
        'https://api.twitter.com/2/tweets/search/stream/rules',
        {
            headers:{
                "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
            }
        }
    )
    .then(response=>res.send(response))
    .catch(error=>res.send(error))
})
app.get('/tweets',(req,res)=>{
    axios.get(
        'https://api.twitter.com/2/tweets?',
        {
            headers:{
                "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
            },
            params:{
                ids:"1228393702244134912,1227640996038684673,1199786642791452673"
            }
        }   
    )
    .then(response=>{
        console.log(response.data)
        res.json(response.data)
    })
    .catch(error=>res.json(error))
})
app.get('/rules',(req,res)=>{
    axios.get(
        'https://api.twitter.com/2/tweets/search/stream/rules',
        {
            headers:{
                "Authorization":"Bearer AAAAAAAAAAAAAAAAAAAAADaBMQEAAAAAOrvtthlW34vH7B7du1N3oUBGrlA%3DAldvPwp68npGCXoWvFjlr4ntDyBhv2LhYxikoM0w6K917r2VnT"
            },
        }   
    )
    .then(response=>{
        console.log(response.data)
        res.json(response.data)
    })
    .catch(error=>res.json(error))
})
