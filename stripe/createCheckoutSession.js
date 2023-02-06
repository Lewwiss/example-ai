import { initFirebase } from "../firebase/firebaseApp";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import initStripe from "./stripeApp";

export async function createCheckoutSession(uid) {
    const firestore = getFirestore(initFirebase());

    const checkoutSesstionRefNew = await addDoc(collection(firestore, "users", uid, "checkout_sessions"), {
        price: process.env.NEXT_PUBLIC_STRIPE_PRICE,
        success_url: window.location.origin + "/dashboard",
        cancel_url: window.location.origin + "/dashboard",
    });

    onSnapshot(checkoutSesstionRefNew, async (snap) => {
        const { sessionId } = snap.data();
        if (sessionId) {
            const stripe = await initStripe();
            stripe.redirectToCheckout({ sessionId });
        };
    });
};