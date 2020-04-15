import {useEffect, useState} from 'react';

export default function useLocalStorage(key, uninitializedValue, initialValue) {
    const [value, setValue] = useState(uninitializedValue);

    useEffect(() => {
        (async () => {
            try {
                await sleep(2000);
                const item = window.localStorage.getItem(key);
                setValue(item != null ? JSON.parse(item) : initialValue);
            } catch (error) {
                console.log(error);
                setValue(initialValue);
            }
        })();
    });

    const store = async valueToStore => {
        try {
            const newValue = valueToStore instanceof Function ? valueToStore(value) : valueToStore;
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
            await sleep(2000);
        } catch (error) {
            console.log(error);
        }
    };

    const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return [value, store];
}
