import { useLocation, Routes, Route } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import { useEffect, Suspense } from "react";
import { allRoutes } from "./routes";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { PageLoader } from "./components/common/LoadingSpinner";

function App() {
  // Using useLocation() + useEffect for scroll reset on route change
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <ErrorBoundary>
      <div className="w-full bg-white text-gray-950 font-poppins">
        {/* Suspense to handle lazy-loaded components */}
        <Suspense fallback={<PageLoader text="Loading page..." />}>
          <Routes>
            {allRoutes.map(({ path, element, children }, idx) => (
              <Route key={idx} path={path} element={element}>
                {children &&
                  children.map((child, cIdx) => (
                    <Route key={cIdx} path={child.path} element={child.element} />
                  ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
