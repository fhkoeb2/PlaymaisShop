'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you an email with your order
            details and tracking information once your items ship.
          </p>
          <div className="space-y-4">
            <Link
              href="/products"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <p className="text-sm text-gray-500">
              Order confirmation has been sent to your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 