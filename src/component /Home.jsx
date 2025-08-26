import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const OTP_DIGITS_COUNT = 5;

    const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill())

    const handleOnChange = (value, index) =>{
        if(isNaN(value)) return;

        const newValue = value.trim();
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        console.log(newValue)
        setInputArr(newArr);
        newValue && refArr.current[index + 1]?.focus()
    }

    const handleOnKeyDown = (e, index) =>{
        if(!e.target.value && e.key === "Backspace"){
            refArr.current[index - 1]?.focus()
        }
    }

    const refArr = useRef([])

    useEffect(() =>{
        refArr.current[0]?.focus()
    }, [])

  return (
    <div className='container'>
        <h1 className='title'>OTP Input Features</h1>
        <div>
            {inputArr.map((input, index) => (
                <input 
                    className='input-box' 
                    key={index} 
                    type='text'
                    value={inputArr[index]} 
                    ref={(input) => (refArr.current[index] = input)} 
                    onChange={(e) => handleOnChange(e.target.value, index)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                />
            ))}
        </div>
    </div>
  )
}

export default Home