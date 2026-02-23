"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./splash-screen";

export function SplashClient() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Prevent scrolling while splash screen is visible
        if (showSplash) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [showSplash]);

    return (
        <AnimatePresence>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>
    );
}
