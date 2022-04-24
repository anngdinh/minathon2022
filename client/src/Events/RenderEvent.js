import Event from "./Event";
import { useEffect, useState } from "react";
import axios from "axios";
import NewEvent from "./createNewEvent";
import Header from "../Header";
import Footer from "../Footer";
export default function RenderEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/event")
      .then((res) => {
        // categories = res.data;
        console.log(res.data);
        setEvents([...res.data]);
        console.log(events);
      })
      .catch((error) => console.log(error));
  }, [loading]);
  return (
    <>
      <Header></Header>
      <div class="container mt-3">
        <div class="d-flex justify-content-end">
          <NewEvent loading={loading} setLoading={setLoading} />
        </div>
        {events.map((item) => (
          <Event loading={loading} setLoading={setLoading} item={item} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
