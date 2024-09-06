import React from 'react';
import Layout from "../layouts/layout";
import VisaApplicationForm from '@/components/applyForVisa';
import TravelInfoForm from '@/components/addTravelInfo';

const AddTravelInfo = () => {
  return (
    <Layout>
      {/* Add your admin page content here */}
      <TravelInfoForm />
      {/* You can add more components or content here */}
    </Layout>
  );
};

export default AddTravelInfo;