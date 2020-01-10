import Link from 'next/link';
import { useHome } from './hooks';

const Home = () => {
    const { title, data } = useHome();

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {data.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Link href="/about"><a>About</a></Link>
        </>
    );
};

export default Home;