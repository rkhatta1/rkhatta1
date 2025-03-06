'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Transition wrapper component that handles page animations
const PageTransition = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [isNavigating, setIsNavigating] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  // Update displayed children when the route changes
  useEffect(() => {
    setDisplayChildren(children);
    // When pathname changes, trigger fade in
    setTransitionStage('fadeIn');
  }, [pathname, children]);

  // Handle navigation between pages
  const handleNavigation = (path) => {
    if (path === pathname) return;
    
    setIsNavigating(true);
    setNextPath(path);
    setTransitionStage('fadeOut');
    
    // Wait for fade out animation to complete before navigating
    setTimeout(() => {
      router.push(path);
      setIsNavigating(false);
      setNextPath(null);
    }, 400); // Match this to your CSS transition duration
  };

  // Apply transition styles based on current stage
  const getTransitionStyles = () => {
    return {
      opacity: transitionStage === 'fadeIn' ? 1 : 0,
      transform: `translateY(${transitionStage === 'fadeIn' ? 0 : '30px'})`,
      filter: `blur(${transitionStage === 'fadeIn' ? 0 : '2.2rem'})`,
      transition: 'opacity 1s ease, transform 1s ease, filter 0.8s ease'
    };
  };

  return (
    // Provide context to children for navigation
    <TransitionContext.Provider
      value={{
        handleNavigation,
        isNavigating,
        nextPath,
        transitionStage
      }}
    >
      <div style={getTransitionStyles()}>
        {displayChildren}
      </div>
    </TransitionContext.Provider>
  );
};

// Create context for transition state
export const TransitionContext = React.createContext({
  handleNavigation: () => {},
  isNavigating: false,
  nextPath: null,
  transitionStage: 'fadeIn'
});

// Custom hook to use in components
export const useTransitionContext = () => React.useContext(TransitionContext);

export default PageTransition;