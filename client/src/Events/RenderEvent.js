import Event from "./Event"
import {useEffect , useState} from 'react'
import axios from "axios";
import NewEvent from './createNewEvent';
export default function RenderEvent(){
  const [events, setEvents] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/event")
            .then((res) => {
                // categories = res.data;
                console.log(res.data);
                setEvents(res.data)
                console.log(( events));
            })
            .catch((error) => console.log(error));
    }, []);
    return(
        <div class="container mt-3">
        <div class="d-flex justify-content-end">
        <NewEvent/>
        </div>
        {
            events.map((item)=> <Event item = {item}/>)
        }
        </div>
    )
}