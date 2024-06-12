import React from 'react'
import './Events.css'

const Events = () => {
    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-6">
                    <img class="shadow rounded-circle" src={require('./event.jpg')} />
                    <h4 class="outfit-subsec">Walking into Nature as Recreational Activity</h4>
                </div>
                <div class="col-lg-6">
                    <div class="p-5 mt-4">
                        <h1 class="head">Rock Climbing</h1>
                        <h3 class="sub">1.Classes & Events</h3>
                        <p class="lead">Crow's nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                        <hr />
                        <p class="lead pt-4 pb-4">10 Modules <br />divided into 7 Weekends</p>

                        <a href="#" class="btn btn-outline-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Events