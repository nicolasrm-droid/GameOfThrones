import React from 'react'



function Card({title}) {
    return (
        <div className="card text-right ">
            <img src="" alt="" />
            <div className="card-body">
                <h4 className="card-title  text-center"> {title} </h4>
                <p className="card-text  text-secondary text-justify">
                    Proident cillum laboris minim ut sunt enim esse.In culpa et reprehenderit deserunt nulla proident esse nisi minim ex labore ipsum pariatur cupidatat. Aute labore officia sint non tempor non adipisicing consectetur consequat officia voluptate ipsum. Officia dolore incididunt sint ut. Magna elit duis qui voluptate aliquip. Proident ut duis labore nisi consectetur esse excepteur reprehenderit incididunt commodo id. Ad mollit est veniam velit proident exercitation anim sit duis laborum incididunt. Est in mollit Lorem pariatur officia dolor Lorem dolore sint officia nisi consectetur amet laborum.
                </p>
                <a href="#!" className="btn btn-outline-secondary rounded-20 ">
                    Go to this web site
                </a>

            </div>
        </div>
    )
}

export default Card
