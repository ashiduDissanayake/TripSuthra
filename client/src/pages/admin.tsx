import React from 'react';
import Layout from "../layouts/layout";
import PersonalDetailsForm from '@/components/personalDetails';

const Admin = () => {
  return (
    <Layout>
      {/* Add your admin page content here */}
      <PersonalDetailsForm />
      {/* You can add more components or content here */}
    </Layout>
  );
};

export default Admin;