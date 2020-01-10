import { paths } from '../../../paths';
import Go from '../Shared/Go';
import { useHome } from './hooks';

const Home = () => {
    const { title, data } = useHome();

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {data.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Go to={paths.about} label="About" />
        </>
    );
};

export default Home;