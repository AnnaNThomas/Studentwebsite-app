import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "name": "anju", "admNo": "101", "roll": "25" },
            { "name": "anu", "admNo": "102", "roll": "26" },
            { "name": "anna", "admNo": "103", "roll": "27" },
            { "name": "arun", "admNo": "104", "roll": "28" }
        ]

    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">Name:{value.name}</h5>
                                                <p class="card-text">Roll no:{value.roll}
                                                </p>
                                                <a href="#" class="btn btn-primary">Admission no:{value.admNo}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll