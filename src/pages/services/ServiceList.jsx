
import { useState, useEffect } from "react";
import './serviceList.css'
import { barbers, fakeServiceCategories } from '../../data/barbers';
export const ServiceList = () => {
    const [services, setService] = useState([]);

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (filter === 'all') {
            setService(barbers);
            return;
        }

        const filteredData = barbers.filter((service) => {
            return service.category === filter
        })

        setService(filteredData);
    }, [filter]);

    return (
        <section id="main-layout">
            <div id="navbar">
                <div>
                    <select
                        name="categories"
                        id="categories"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All</option>

                        {fakeServiceCategories.map((category, index) => (
                            <option value={category} key={index}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <div className="serviceCardWrapper">
                    {services.map((service) => (
                        <div className="servicecard" key={service.id}>
                            <div className="servicecard-content">
                                <h2>{service.name}</h2>
                                <p>Service:{service.service}</p>
                                <p>Category:{service.category}</p>
                                <p className="price">Price: {service.price} AMD</p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};