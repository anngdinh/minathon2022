import {useState} from 'react'
import {Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
// import './Datepick.css'
import "react-datepicker/dist/react-datepicker.css";
export default function NewEvent(){
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
    };

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
    };
    return (
        <>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Tao event moi
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

                    {/* <!-- Modal body --> */}\
                    {/* style={{borderRadius:'9px'}} */}
                    <div class="modal-body">
                        <Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
                        <Form.Label>Tên sự kiện</Form.Label>
                        <Form.Control type="text" placeholder="Tên sự kiện" name="textName"  required />
                        <Form.Control.Feedback type="invalid">
                            Phần này không được để trống
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom03" style={{margin:'10px 0 2px'}}>
                        <Form.Label>Địa điểm tổ chức</Form.Label>
                        <Form.Control type="text" placeholder="Tên địa điểm tổ chức"  name="textName"  required />
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
                        <label class="form-label mt-2" for="customFile">Hinh anh su kien</label>
                        <input type="file" class="form-control" id="customFile" accept="image/gif,image/jpeg,image/jpg,image/png"/>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{margin:'10px 0 2px'}}>
                            <Form.Label>Mô tả chi tiết</Form.Label>
                            <Form.Control as="textarea" rows={3} name="textName"/>
                        </Form.Group>
                        </div>

                    {/* <!-- Modal footer --> */}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}