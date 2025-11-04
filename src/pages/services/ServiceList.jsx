import './serviceList.css'
import barbers from '../../data/barbers.js';
export const ServiceList = () => {
    return (
        <section id="main-layout">
            <div id="navbar"></div>

            <div id="content"></div>
            <div className="serviceCardWrapper">
                {barbers.map((barber) => (
                    <div className="servicecard" key={barber.id}>
                        <div className="servicecard-content">
                            <h2>{barber.name}</h2>
                            <p>{barber.service}</p>
                            <p className="price">Price: {barber.price} AMD</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};