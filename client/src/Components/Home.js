import React ,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function Home (){
    const [show,setShow]=useState(true);
    function More_info(){
        setShow(!show);
    }

    return(
        <div class="container">
            <nav id="sidenav-1" class="sidenav" data-mdb-hidden="false">
                <ul class="sidenav-menu">
                    <li class="sidenav-item">
                    <a class="sidenav-link">
                        <span>Link 1</span></a>
                    </li>
                    <li class="sidenav-item">
                    <a class="sidenav-link"><span>Category 1</span></a>
                    <ul class="sidenav-collapse show">
                        <li class="sidenav-item">
                        <a class="sidenav-link">Link 2</a>
                        </li>
                        <li class="sidenav-item">
                        <a class="sidenav-link">Link 3</a>
                        </li>
                    </ul>
                    </li>
                    <li class="sidenav-item">
                    <a class="sidenav-link"><span>Category
                        2</span></a>
                    <ul class="sidenav-collapse">
                        <li class="sidenav-item">
                        <a class="sidenav-link">Link 4</a>
                        </li>
                        <li class="sidenav-item">
                        <a class="sidenav-link">Link 5</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            </nav>

            <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
                aria-controls="#sidenav-1" aria-haspopup="true">
                
            </button>

            <div class="card" style={{maxWidth: '400px'}}>
                <img class="card-img-top img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Card" style={{maxHeight:"300px"}}/>
                <div class="card-body">
                    <h4 class="card-title">Giày Nike</h4>
                    {!show ? 
                    <div >
                        <p class="card-text text-truncate" style={{maxWidth: "400px"}}>Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <p class="card-text" > Address: HCMUT </p>
                        <div class="d-flex justify-content-between"><p class="card-text" > In_stock: 1 </p>
                        <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </div>
                    </div>
                    :

                    <div>
                        <p class="card-text" >Some example text some example text. Some example text some example text. Some example text some example text.</p>
                        <p class="card-text" > Address: HCMUT </p>
                        <p class="card-text" > Phone: 0123456789 </p>
                        <div class="d-flex justify-content-between">
                            <p class="card-text" > In_stock: 1 </p>
                            <svg onClick={More_info} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </div>
                    </div>
                    }
                    <p class="text-center"><a href="#" class="btn btn-primary ">Cho em xin</a></p>
                </div>
            </div>
        </div>
    )
}
export default Home