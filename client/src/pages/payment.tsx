import React from 'react';
import Layout from "../layouts/layout";
import PaymentForm from '@/components/PaymentMethod';

const Payment = () => {
  return (
    <Layout>
      {/* Add your admin page content here */}
      <PaymentForm />
      {/* You can add more components or content here */}
    </Layout>
  );
};

export default Payment;