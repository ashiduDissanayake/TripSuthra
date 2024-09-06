import React from 'react';
import Layout from "../layouts/layout";
import VisaApplicationForm from '@/components/applyForVisa';

const Visa = () => {
  return (
    <Layout>
      {/* Add your admin page content here */}
      <VisaApplicationForm />
      {/* You can add more components or content here */}
    </Layout>
  );
};

export default Visa;