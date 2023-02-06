import { initFirebase } from "../firebase/firebaseApp";
import { getFunctions, httpsCallable } from "firebase/functions";

export async function createPortalLink() {
    const functionRef = getFunctions(initFirebase(), "europe-west2");
    const createPortalLinkRef = httpsCallable(functionRef, "ext-firestore-stripe-payments-createPortalLink");

    const { data } = await createPortalLinkRef({
        returnUrl: window.location.origin + "/account"
    });

    return window.location.assign(data.url);
};