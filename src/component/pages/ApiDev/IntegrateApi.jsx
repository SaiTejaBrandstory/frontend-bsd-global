import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const IntegrateApi = () => {
    const title = "Accelerate Innovation with Ready-to-Integrate APIs";
    const description = "We help you plug into your existing ecosystems, fast:";
    const footer = "";
    const data = [
        {
            "title": "Payment Gateway APIs",
            "description": `
                Facilitate fast, secure, and frictionless transactions by integrating with leading gateways like Razorpay, Stripe, PayPal, and more. Our solutions support multi-currency processing, tokenization, recurring payments, and PCI-compliant checkouts tailored to your business model.
            `
        },
        {
            "title": "Shipping & Logistics APIs",
            "description": `
                Streamline order fulfillment and logistics through real-time integrations with carriers like FedEx, DHL, Shiprocket, and local delivery networks. From label creation and pickup scheduling to tracking and delivery notifications — we automate every touchpoint.
            `
        },
        {
            "title": "SMS & Communication APIs",
            "description": `
                Power time-sensitive communication through robust integrations with platforms like Twilio, MSG91, and Gupshup. Ideal for OTPs, customer alerts, and transactional or conversational messaging — all built for reliability and scale.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}