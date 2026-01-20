import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ finishLoading }) => {
    const [showTagline, setShowTagline] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTagline(true), 800);
        const endTimer = setTimeout(() => finishLoading(), 4500); // 4.5s total show time
        return () => {
            clearTimeout(timer);
            clearTimeout(endTimer);
        };
    }, [finishLoading]);

    return (
        <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="video-background">
                {/* Using a high-quality land/construction cinematic background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="bg-video"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-landscape-with-mountains-and-a-lake-1589-large.mp4" type="video/mp4" />
                </video>
                <div className="overlay-vignette"></div>
            </div>

            <div className="splash-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="splash-logo"
                >
                    <h1>Land<span>Connect</span></h1>
                </motion.div>

                <AnimatePresence>
                    {showTagline && (
                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "2px" }}
                            animate={{ opacity: 1, letterSpacing: "8px" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="splash-tagline"
                        >
                            FOR BROKERS & BUILDERS
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <motion.div
                className="splash-loader"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
            />
        </motion.div>
    );
};

export default SplashScreen;
