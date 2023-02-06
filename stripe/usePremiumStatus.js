import { useState, useEffect } from "react";
import isUserPremium from "./isUserPremium";

function usePremiumStatus(user) {
    const [premiumStatus, setPremiumStatus] = useState(false);

    useEffect(() => {
        if (user) {
            const checkPremiumStatus = async function () {
                setPremiumStatus(await isUserPremium());
            };
            checkPremiumStatus();
        };
    }, [user]);

    return premiumStatus;
};

export default usePremiumStatus;