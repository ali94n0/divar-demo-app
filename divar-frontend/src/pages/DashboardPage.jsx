
import AddNewPost from 'components/templates/AddNewPost';
import MyPosts from 'components/templates/MyPosts';

const DashboardPage = () => {
    return (
        <div>
            <AddNewPost/>
            <MyPosts/>
        </div>
    );
};

export default DashboardPage;