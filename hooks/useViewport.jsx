// MODULE
import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";

const defaultValue = {};
const ViewportContext = createContext(defaultValue);

const Viewport = {
  PHONE: "PHONE",
  PHABLET: "PHABLET",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
  LAPTOP: "LAPTOP",
  WIDE: "WIDE",
};

const getDeviceConfig = (width) => {
  if (width < 400) {
    return Viewport.PHONE;
  } else if (width < 768) {
    return Viewport.PHABLET;
  } else if (width < 1024) {
    return Viewport.TABLET;
  } else if (width < 1281) {
    // * Added Laptop Option
    return Viewport.LAPTOP;
  } else if (width < 1536) {
    return Viewport.DESKTOP;
  } else {
    return Viewport.WIDE;
  }
};

const ViewportProvider = ({ children, reqViewport }) => {
  const initialViewport = reqViewport || Viewport.WIDE;
  const [viewport, setViewport] = useState(initialViewport);

  const setCurrentViewport = useCallback(
    (currentViewport) => {
      if (viewport !== currentViewport) {
        setViewport(currentViewport);
      }
    },
    [viewport]
  );

  useEffect(() => {
    // initial state
    const initialViewportCS = getDeviceConfig(window.innerWidth);
    setCurrentViewport(initialViewportCS);

    const calcInnerWidth = () => {
      const newViewport = getDeviceConfig(window.innerWidth);
      setCurrentViewport(newViewport);
    };

    // add event listener
    window.addEventListener("resize", calcInnerWidth);

    // remove event listener
    return () => {
      window.removeEventListener("resize", calcInnerWidth);
    };
    // if we add viewport the whole setup of setting the event listener only once is gone
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

function useViewport() {
  const context = useContext(ViewportContext);
  if (context === defaultValue) {
    throw new Error("useViewport is not used within a ViewportProvider");
  }
  return context;
}

const MockedViewportProvider = ({
  children,
  viewport = Viewport.DESKTOP,
}) => {
  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

// for testing purposes
export { MockedViewportProvider };

// public api
export { useViewport, ViewportProvider, Viewport };
