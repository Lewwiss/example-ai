import { loadStripe } from "@stripe/stripe-js";

const initStripe = async () => {
    const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API);
    return stripePromise;
};

export default initStripe;