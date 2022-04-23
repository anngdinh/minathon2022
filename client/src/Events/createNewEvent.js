import {useState} from 'react'
import {Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
// import './Datepick.css'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const User = {
    username: "Long",
    password: "123456",
    fname: "Nguyen",
    lname: "Long",
    email: "Nothing@gmail.com",
    phone: "0984046827",
    url_avt:
      "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg",
    birthday: "2001-01-01",
  };
export default function NewEvent(){
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [event, setEvent] = useState({
        description: "",
        address: "",
        title: "",
        image:"",
    });
    const { description, address, title,image } = event;
    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
        console.log(date.toLocaleDateString('en-US'));
    };

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
    };
    const onChangeField = (e) => {
        setEvent({
          ...event,
          [e.target.name]: e.target.value,
        });
      };
      const handleChangImg = (e) => {
        setEvent({
          ...event,
          image: e.target.files[0],
        });
      };
    const handleClick = () => {
        const formData = new FormData();
        formData.append("address", event.address);
        formData.append("description", event.description);
        formData.append("title", event.title);
        formData.append("userID", "626401f7e60d778ed7fa4557");
        formData.append("startTime", checkInDate.toLocaleDateString('en-US'));
        formData.append("endTime", checkOutDate.toLocaleDateString('en-US'));
        formData.append("img", event.image);
        axios.post("http://localhost:5000/event", formData);
      };
    return (
        <>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"></path>
                <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"></path>
            </svg>
                <span class="ms-1">Tao event moi</span>
            </button>
            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    {/* <!-- Modal Header --> */}
                    <div class="modal-header">
                        <h4 class="modal-title">Thong tin su kien</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    {/* <!-- Modal body --> */}
                    {/* style={{borderRadius:'9px'}} */}
                    <div class="modal-body">
                        <Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="title" name="title" value={title} onChange={onChangeField} required />
                        <Form.Control.Feedback type="invalid">
                            Phần này không được để trống
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom03" style={{margin:'10px 0 2px'}}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Tên địa điểm tổ chức"  name="address" value={address} onChange={onChangeField} required />
                        <Form.Control.Feedback type="invalid">
                            Phần này không được để trống
                        </Form.Control.Feedback>
                        </Form.Group>
                        <div class ='row mt-2'>
                            <div class ='col-md-3 col-sm-6'>
                                <label class="mb-1">Check-in</label>
                                <DatePicker
                                selected={checkInDate}
                                minDate={new Date()}
                                onChange={handleCheckInDate}
                                placeholderText ="Start date"
                                dateFormat="yyyy-MM-dd"
                                name='start'
                                />
                            </div>
                            <div class ='col-md-3 col-sm-6 ms-3'>
                                <label class="mb-1">Check-out</label>
                                <DatePicker
                                selected={checkOutDate}
                                minDate={checkInDate}
                                onChange={handleCheckOutDate}
                                placeholderText ="End date"
                                dateFormat="yyyy-MM-dd"
                                name='end'
                                />
                            </div>
                        </div>
                        <label class="form-label mt-2" for="customFile">Image</label>
                        <input type="file" class="form-control" id="customFile" accept="image/gif,image/jpeg,image/jpg,image/png" name="image" onChange={handleChangImg}/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{margin:'10px 0 2px'}}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={description} onChange={onChangeField}/>
                        </Form.Group>
                        </div>

                    {/* <!-- Modal footer --> */}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" id='OKButton' style={{width:"80px"}} onClick={handleClick}>OK</button>
                        <button type="button" class="btn btn-danger ms-4" data-bs-dismiss="modal" style={{width:"80px"}}>Close</button>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}