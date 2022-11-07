//export data mock features
import { featuresMock } from '../../data/DataMock'
//components
import { Feature } from '../../components/Features/Index';

export default function Home() {
    return (
        <div className="App">
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {
                        featuresMock.map((feature) =>
                            <Feature key={feature.title} title={feature.title} icon={feature.icon} image={feature.image}>
                                {feature.description}
                            </Feature>
                        )
                    }
                </section>
            </main>
        </div>
    )
}
