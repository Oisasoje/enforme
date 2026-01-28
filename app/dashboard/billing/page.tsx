"use client";

import {
  CreditCard,
  Download,
  History,
  Plus,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export default function BillingPage() {
  const billingHistory = [
    {
      id: "INV-2024-001",
      date: "Jan 15, 2024",
      amount: "₦25,000",
      status: "Paid",
      items: "Monthly Membership - Premium",
    },
    {
      id: "INV-2023-128",
      date: "Dec 15, 2023",
      amount: "₦25,000",
      status: "Paid",
      items: "Monthly Membership - Premium",
    },
    {
      id: "INV-2023-099",
      date: "Nov 15, 2023",
      amount: "₦2,500",
      status: "Paid",
      items: "Protein Shake Bundle",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Bank Account",
      last4: "8821",
      bank: "GTBank",
      isDefault: true,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-[#1a3a52]">
            Billing & Payments
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your payment methods and view history.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#1a3a52] flex items-center gap-2">
            <CreditCard size={20} className="text-[#c9a961]" />
            Payment Methods
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="border border-gray-200 rounded-xl p-4 flex items-center justify-between bg-gray-50/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-100">
                      <span className="font-bold text-[#1a3a52] text-xs">
                        BANK
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-[#1a3a52]">
                          {method.bank} •••• {method.last4}
                        </h3>
                        {method.isDefault && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Direct Debit Mandate •{" "}
                        <span className="text-green-600 font-medium">
                          Active
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-red-500 font-medium transition-colors">
                    Remove
                  </button>
                </div>
              ))}

              <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-[#c9a961] hover:text-[#c9a961] hover:bg-[#c9a961]/5 transition-all flex items-center justify-center gap-2 font-medium">
                <Plus size={18} />
                Add New Payment Method
              </button>
            </div>

            <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
              <ShieldCheck className="text-blue-600 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-bold text-blue-900">
                  Secure Payments via PayWithAccount
                </h4>
                <p className="text-xs text-blue-700 mt-1">
                  Your mandates are securely stored and processed by OnePipe. We
                  do not store sensitive bank details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Plan Summary */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#1a3a52] flex items-center gap-2">
            <AlertTriangle size={20} className="text-[#c9a961]" />
            Billing Summary
          </h2>
          <div className="bg-[#1a3a52] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a961] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <p className="text-gray-300 text-sm font-medium mb-1">
                Next Payment Due
              </p>
              <h3 className="text-3xl font-bold">₦25,000</h3>
              <p className="text-sm text-[#c9a961] font-medium mt-1">
                Due on Feb 15, 2024
              </p>

              <div className="mt-8 pt-6 border-t border-[#2a4a62] space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Premium Membership</span>
                  <span className="font-medium">₦25,000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">VAT (7.5%)</span>
                  <span className="font-medium">Included</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-[#c9a961] text-[#1a3a52] py-3 rounded-lg font-bold hover:bg-[#b89a50] transition-colors shadow-lg shadow-[#c9a961]/20">
                Pay Early
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice History */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#1a3a52] flex items-center gap-2">
          <History size={20} className="text-[#c9a961]" />
          Payment History
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Invoice ID
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {billingHistory.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-[#1a3a52]">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{invoice.date}</td>
                    <td className="px-6 py-4 text-gray-500">{invoice.items}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          invoice.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#1a3a52] transition-colors my-auto">
                        <Download size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
