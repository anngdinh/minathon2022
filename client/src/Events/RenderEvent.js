import Event from "./Event"
import {useEffect , useState} from 'react'
import axios from "axios";
export default function RenderEvent(){
  const [events, setEvents] = useState([]);
    // let data =[
    //     {
    //       url: "https://th.bing.com/th/id/R.47958882729eec8fb98fe887f5402249?rik=Xeh4m18S4g0H6Q&riu=http%3a%2f%2fwww.bayhospitalscharity.org%2fwp-content%2fuploads%2f2019%2f05%2fEvents-1.jpg&ehk=sU337rBXP8%2bZpNaSOZYWTyHZJY6PU88yRU7uZFtECN4%3d&risl=&pid=ImgRaw&r=0",
    //       topic: "Hien mau tinh nguyen",
    //       description: "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, or around.",
    //       startTime:"30/06/2022",
    //       endTime:"30/07/2022",
    //       number: 300
    //     },
    //     {
    //       url: "https://th.bing.com/th/id/R.47958882729eec8fb98fe887f5402249?rik=Xeh4m18S4g0H6Q&riu=http%3a%2f%2fwww.bayhospitalscharity.org%2fwp-content%2fuploads%2f2019%2f05%2fEvents-1.jpg&ehk=sU337rBXP8%2bZpNaSOZYWTyHZJY6PU88yRU7uZFtECN4%3d&risl=&pid=ImgRaw&r=0",
    //       topic: "Hien mau tinh nguyen",
    //       description: "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, or around.",
    //       startTime:"30/06/2022",
    //       endTime:"30/07/2022",
    //       number: 300
    //     },
    //     {
    //       url: "https://th.bing.com/th/id/R.47958882729eec8fb98fe887f5402249?rik=Xeh4m18S4g0H6Q&riu=http%3a%2f%2fwww.bayhospitalscharity.org%2fwp-content%2fuploads%2f2019%2f05%2fEvents-1.jpg&ehk=sU337rBXP8%2bZpNaSOZYWTyHZJY6PU88yRU7uZFtECN4%3d&risl=&pid=ImgRaw&r=0",
    //       topic: "Hien mau tinh nguyen",
    //       description: "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, or around.",
    //       startTime:"30/06/2022",
    //       endTime:"30/07/2022",
    //       number: 300
    //     }
    //     ,{
    //       url: "https://th.bing.com/th/id/R.47958882729eec8fb98fe887f5402249?rik=Xeh4m18S4g0H6Q&riu=http%3a%2f%2fwww.bayhospitalscharity.org%2fwp-content%2fuploads%2f2019%2f05%2fEvents-1.jpg&ehk=sU337rBXP8%2bZpNaSOZYWTyHZJY6PU88yRU7uZFtECN4%3d&risl=&pid=ImgRaw&r=0",
    //       topic: "Hien mau tinh nguyen",
    //       description: "Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from start (browser default), end, center, between, or around.",
    //       startTime:"30/06/2022",
    //       endTime:"30/07/2022",
    //       number: 300
    //     }
    //   ]
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
        <>
        {
            events.map((item)=> <Event item = {item}/>)
        }
        </>
    )
}