import React from 'react';
import CategoriesList from 'components/templates/CategoriesList';
import AddCategory from 'components/templates/AddCategory';

const AdminPage = () => {
    return (
        <div>
            <CategoriesList/>
            <AddCategory/>
        </div>
    );
};

export default AdminPage;