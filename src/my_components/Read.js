// Purpose: To display the books that are read using the usestate hook and axios to get the data from the api
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);
    //data to be passed to the axios (which is a promise based http client) call to get the data from the api
    useEffect(
        () => {
            axios.get('http://localhost:4000/api/books')
                .then(
                    (response) => {
                         setData(response.data.mybooks);
                    }
                )
                .catch((error) => console.log(error))
        }, []);

    return (
        // Read compoentent that dislays to the main react app when called in app.js
        <div>
            <h2>Hello from Read  compoent </h2>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;