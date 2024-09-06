import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface PaymentFormData {
  cardNumber: string;
  cardOwner: string;
  visaFee: string;
  expiryDate: string;
  cvv2: string;
}

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardOwner: '',
    visaFee: '',
    expiryDate: '',
    cvv2: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Make Payment</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newCard" className="form-checkbox" />
              <Label htmlFor="newCard">Add new card</Label>
              <div className="flex-grow"></div>
              <img src="/public/visa.jfif" alt="Mastercard" className="h-5" />
              <img src="/public/mastercard.jfif" alt="Visa" className="h-5" />
              
            </div>

            <div>
              <Label htmlFor="cardNumber">Card number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter the 16-digit card number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="cardOwner">Card owner</Label>
              <Input
                id="cardOwner"
                name="cardOwner"
                placeholder="Enter the name on the card"
                value={formData.cardOwner}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="visaFee">Visa Fee</Label>
              <Input
                id="visaFee"
                name="visaFee"
                placeholder="Amount based on the type of visa"
                value={formData.visaFee}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-grow">
                <Label htmlFor="expiryDate">Expiry date</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM / YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-1/3">
                <Label htmlFor="cvv2">CVV2</Label>
                <Input
                  id="cvv2"
                  name="cvv2"
                  placeholder="Security code"
                  value={formData.cvv2}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Review your payment
            </Button>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Previous</Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;