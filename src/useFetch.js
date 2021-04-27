import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
    setTimeout(()=>{
        fetch(url, {signal: abortCont.signal})
    .then(res =>{
        if(!res.ok){
            throw Error('Could not fetch for the resource');
        }
        return res.json();
    })
    .then(data =>{
        setData(data); //data fetch
        setPending(false); //setting the state as false since data is loaded
        setError(null);
    })
    .catch((err=> {
        if(err.name === 'AbortError'){
            console.log('fetchAborted');
        }
        else
        {setPending(false);
        setError(err.message)} //catch error if fetch fails
    }))
    },1000)
    return() => abortCont.abort();
}, [url]);   ///????
return {data, pending, error}
}
 
export default useFetch;