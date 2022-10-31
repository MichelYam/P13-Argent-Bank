//export data mock features
import { featuresMock } from '../../data/DataMock'
//components
import { Feature } from '../../components/Features/Index';
//style
import styles from './Style.module.css';

export default function Home() {
    return (
        <div className={styles.App}>
            <main>
                <div className={styles.hero}>
                    <section className={styles["hero-content"]}>
                        <h2 className={styles["sr-only"]}>Promoted Content</h2>
                        <p className={styles.subtitle}>No fees.</p>
                        <p className={styles.subtitle}>No minimum deposit.</p>
                        <p className={styles.subtitle}>High interest rates.</p>
                        <p className={styles.text}>Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className={styles.features}>
                    <h2 className={styles["sr-only"]}>Features</h2>
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
