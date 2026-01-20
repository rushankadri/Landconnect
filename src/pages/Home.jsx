import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import { ArrowRight } from 'lucide-react';

const SAMPLE_PROPERTIES = [
    {
        id: 1,
        title: "Rolling Hills Estate",
        location: "Asheville, NC",
        price: "$145,000",
        size: "5.2 Acres",
        type: "Residential",
        zoning: "R1",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Desert Oasis Plot",
        location: "Scottsdale, AZ",
        price: "$89,900",
        size: "2.1 Acres",
        type: "Investment",
        zoning: "Mixed",
        image: "https://images.unsplash.com/photo-1542665093-d4d7d678c1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Lakeside Timber Land",
        location: "Duluth, MN",
        price: "$210,000",
        size: "12 Acres",
        type: "Recreation",
        zoning: "Agri",
        image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const Home = () => {
    return (
        <>
            <Hero />

            <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.875rem' }}>Featured Listings</span>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Premium Land Opportunities</h2>
                        </div>
                        <a href="/buy" className="btn btn-secondary" style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' } }}>
                            View All Properties
                        </a>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: '2rem'
                    }}>
                        {SAMPLE_PROPERTIES.map(prop => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <button className="btn btn-primary">Load More Listings</button>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--secondary-dark)', fontWeight: '600', letterSpacing: '1px' }}>FOR BROKERS</span>
                        <h2 style={{ fontSize: '3rem', margin: '1rem 0 1.5rem' }}>List. Market. Sell.</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Premium tools designed for land specialist brokers. Syndicate your listings to our high-intent network.
                        </p>
                        <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%' }}></div>
                                Global MLS Syndication
                            </li>
                        </ul>
                        <button className="btn btn-primary">Broker Portal <ArrowRight size={20} /></button>
                    </div>
                    <div style={{
                        height: '400px',
                        background: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) center/cover',
                        borderRadius: '24px'
                    }}></div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{
                        height: '400px',
                        background: 'url(https://images.unsplash.com/photo-1503387762-592dea58ef23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80) center/cover',
                        borderRadius: '24px'
                    }}></div>
                    <div>
                        <span style={{ color: 'var(--secondary)', fontWeight: '600', letterSpacing: '1px' }}>FOR BUILDERS</span>
                        <h2 style={{ fontSize: '3rem', margin: '1rem 0 1.5rem', color: 'white' }}>Acquire Ready-to-Build Sites.</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem' }}>
                            Streamline your development pipeline. Access pre-screened land with zoning reports and feasibility data.
                        </p>
                        <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '24px', height: '24px', border: '2px solid var(--secondary)', borderRadius: '50%' }}></div>
                                Priority Off-Market Access
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '24px', height: '24px', border: '2px solid var(--secondary)', borderRadius: '50%' }}></div>
                                Detailed Zoning Insights
                            </li>
                        </ul>
                        <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Find Development Sites <ArrowRight size={20} /></button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
