import Link from 'next/link';
import { useHomeState } from './hooks';
import { useEffect } from 'react';

const Home = () => {
    const { title, data, changeTitle, getData } = useHomeState();

    useEffect(
        () => {
            setTimeout(
                () => {
                    changeTitle('Title changed via action!')
                    getData();
                },
                3000
            );
        },
        []
    );

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {data.map(item => <li>{item}</li>)}
            </ul>
            <Link href="/about"><a>About</a></Link>
        </>
    );
};

export default Home;