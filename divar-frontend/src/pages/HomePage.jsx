
import Main from 'components/templates/Main';
import Sidebar from 'components/templates/Sidebar';
import Loader from 'components/modules/Loader';
import useCategories from 'hooks/useCategories';


const HomePage = () => {
    const { isLoading, categories } = useCategories()
    
    return (
        <>
        {(isLoading ) ? <Loader/> : <div style={{display:"flex"}}>
            <Sidebar categories={categories} />
            <Main  />
        </div>}
        </>
    );
};

export default HomePage;