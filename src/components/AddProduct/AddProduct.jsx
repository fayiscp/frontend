import axios from 'axios';
import React from 'react'

function addProduct() {

    async function handleData(e) {

        e.preventDefault()
        let formdata = new FormData(e.target)

        console.log(formdata);
        try {
            let result = await axios.post('http://localhost:5000/product', formdata)
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            <form onSubmit={handleData}>
                <input type="text" placeholder='Productname' name='Productname' />
                <input type="text" placeholder='Brandname' name='Brandname' />
                <input type="text" placeholder='Category' name='Category' />
                <input type="text" placeholder='Price' name='Price' />
                <input type="text" placeholder='Stock' name='Stock' />
                <input type="file" placeholder='image' name='image' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default addProduct