import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useState, useEffect} from 'react'
import axios from "axios";

export default function Event(props) {
    const idUser = localStorage.getItem("userId");
    const [show, setshow] = useState(false)
    const [stateResgister, setStateResgister] = useState(false)
    const [reload, setReload] = useState(false)
    const [numMember, setNumMember] = useState(props.item.listJoin.length)
    function More_info(){
        setshow(!show)
    }
    useEffect(() => {
        for(let i=0;i<numMember;i++){
            if(props.item.listJoin[i]._id == idUser){
                setStateResgister(true);
                break;
            }
        }
    },[])
    const increaseMember = ()=>{
        setNumMember(numMember+1);
        setStateResgister(!stateResgister);
        const formData = new FormData();
        formData.append("idUser",idUser );
        axios.put("http://localhost:5000/event/member?id=" + props.item._id, formData);
    }
    const reduceMember = ()=>{
        setNumMember(numMember-1);
        setStateResgister(!stateResgister);
        console.log(props.item._id);
        const formData = new FormData();
        formData.append("idUser", "626401f7e60d778ed7fa4557");
        axios.put("http://localhost:5000/event/removemember?id=" + props.item._id, formData);
    }
    return(
        // <div class="container mt-3">
        <div class="mt-3">
            <div class="card shadow-sm p-3bg-white rounded">
            <img class="card-img-top" src={props.item.img} alt="Card image" style={{width:"100%" , objectFit: "cover", height:"250px"}}/>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title">{props.item.title}</h4>
                    <div><span class="text-secondary">Thoi gian: </span>{props.item.startTime}<span class="text-secondary"> den </span>{props.item.endTime}</div>
                </div>
                
                {!show ? 
                    <div>
                        <div class="d-flex justify-content-between">
                            <div><span class="text-secondary">So luong: </span>     <span class="text-danger">{numMember}</span>     <span class="text-secondary"> nguoi</span></div>
                            <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                    :

                    <div>
                        <div><span class="text-secondary">So luong: </span>     <span class="text-danger">{numMember}</span>     <span class="text-secondary"> nguoi</span></div>
                        <div><span class="text-secondary">Address: </span> {props.item.address} </div>
                        <p class="card-text mt-2">{props.item.description}</p>
                        <div class=" mb-2"><span class="text-secondary">Nguoi dang: </span> {props.item.userID.name} </div>
                        <div class="d-flex justify-content-between">
                            {!stateResgister ?
                                <button button type="button" class="btn btn-primary" onClick={increaseMember}>Dang ky</button>
                                :
                                <button button type="button" class="btn btn-success" onClick={reduceMember}>Da dang ky</button>
                            }
                            <p class="text-end mb-0">
                                <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                </svg>
                            </p>
                        </div>
                        {/* <label class="mt-3 fs-5">Danh sach thanh vien tham gia</label> */}
                        <table class="table mt-3">
                            <thead class="table-success">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Thoi gian dang ky</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.item.listJoin.map((member,index)=> {
                                    return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{member.name}</td>
                                        <td>30/07/2022</td>
                                    </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}
