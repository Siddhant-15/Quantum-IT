import React from 'react'
import './Classes.css'

function Classes() {
    return (
        <div class="container" id='class'>


            <div class="card-deck row">

                <div class="col-xs-12 col-sm-6 col-md-4">

                    <div class="card">


                        <div class="view overlay">
                            <img class="card-img-top" src={require('./3.jpeg')} alt="Card image cap" />
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>


                        <div class="card-body">


                            <h4 class="card-title">Vacation</h4>

                            <p class="card-text">A vacation or holiday is either a leave of absence from a regular job or an instance of leisure travel away from home. People often take a vacation during specific holiday observances or for specific festivals or celebrations.The concept of taking a vacation is a recent invention, and has developed through the last two centuries.</p>

                        </div>

                    </div>

                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">

                    <div class="card mb-4">


                        <div class="view overlay">
                            <img class="card-img-top" src={require('./2.jpeg')} alt="Card image cap" />
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>


                        <div class="card-body">


                            <h4 class="card-title">Trips</h4>

                            <p class="card-text">The TRIPS Agreement requires Member countries to make patents available for any inventions, whether products or processes, in all fields of technology without subject to the normal tests of novelty, inventiveness and industrial applicability.</p>

                        </div>

                    </div>

                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">

                    <div class="card mb-4">


                        <div class="view overlay">
                            <img class="card-img-top" src={require('./1.jpeg')} alt="Card image cap" />
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>


                        <div class="card-body">


                            <h4 class="card-title">Holidays</h4>

                            <p class="card-text">A holiday is a day or other period of time set aside for festivals or recreation. Religious holidays are set by organisations for their members and are often also observed as public holidays in religious majority countries.</p>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Classes;

