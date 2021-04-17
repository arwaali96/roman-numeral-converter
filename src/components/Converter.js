import { useState } from 'react';

const Converter = () => {
    const [number, setNumber] = useState('');
    const [roman, setRoman] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!number || number >= 10000) {
            alert('Please enter an arabic number less than 10,000')
            return
        }

        const convertToRoman = (number) => {
            let romanObj = {
                0: { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" },
                1: { 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC" },
                2: { 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM" },
                3: { 1: "M", 2: "MM", 3: "MMM", 4: "MMMM", 5: "MMMMM", 6: "MMMMMM", 7: "MMMMMMM", 8: "MMMMMMMM", 9: "MMMMMMMMM" }
            };

            let romNum = "";
            let j = 0;
            for (let i = number.toString().length - 1; i >= 0; i--) {
                if (Number(number.toString()[j]) !== 0) {
                    romNum += romanObj[i][Number(number.toString()[j])];
                }
                j++;
            }
            return romNum;
        }

        setRoman(convertToRoman(number));
    }

    return (
        <div>
            <form className='input-bar' onSubmit={onSubmit}>
                <input
                    type='number'
                    placeholder='Enter an arabic number'
                    onChange={(e) => setNumber(e.target.value)}
                />
                <input type='submit' value='Submit' className='btn btn-block' />
            </form>
            < div className='container'>
                <p className='arabic'> <br/> <br/>
                    Arabic:
                    <br/>
                    {roman ? number : ''}</p>
                <p className='roman'> <br /> <br />
                    Roman: <br/>
                    {roman}</p>
            </div >
        </div>
    )
}

export default Converter
