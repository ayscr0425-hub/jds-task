import React, { useEffect, useState } from 'react';
import CartPage from './cart/CartPage';
import GuangGuangPage from './explore/pages/GuangGuangPage';
import HomeFlashPage from './home-flash/HomeFlashPage';
import HomeMainPage from './home-main/HomeMainPage';
import HomeNewPage from './home-new/HomeNewPage';
import Home from './home-special/Home';
import MessagePage from './messages/MessagePage';
import MinePage from './my-home/MinePage';
import { BACK_EVENT, NAVIGATE_EVENT } from './prototype/navigation';

const PAGE_COMPONENTS = {
  homeSpecial: Home,
  homeMain: HomeMainPage,
  homeFlash: HomeFlashPage,
  homeNew: HomeNewPage,
  explore: GuangGuangPage,
  messages: MessagePage,
  cart: CartPage,
  myHome: MinePage,
};

const INITIAL_PAGE = 'homeFlash';

function App() {
  const [currentPage, setCurrentPage] = useState(window.__INITIAL_PAGE_KEY__ || INITIAL_PAGE);
  const [pageHistory, setPageHistory] = useState([INITIAL_PAGE]);

  useEffect(() => {
    const handlePageChange = () => {
      const pageKey = document
        .querySelector('[data-page-key]')
        ?.getAttribute('data-page-key');
      if (pageKey && pageKey !== currentPage) {
        setCurrentPage(pageKey);
      }
    };

    handlePageChange();
  }, []);

  useEffect(() => {
    window.__setCurrentPage = (pageKey) => {
      if (pageKey) setCurrentPage(pageKey);
    };
    return () => { delete window.__setCurrentPage; };
  }, []);

  useEffect(() => {
    const rootEl = document.querySelector('[data-page-key]');
    if (!rootEl) return;
    const observer = new MutationObserver(() => {
      const newKey = rootEl.getAttribute('data-page-key');
      if (newKey) setCurrentPage(newKey);
    });
    observer.observe(rootEl, { attributes: true, attributeFilter: ['data-page-key'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleNavigate = (event) => {
      const nextPage = event.detail?.page;
      const replace = event.detail?.replace;

      if (!nextPage || !PAGE_COMPONENTS[nextPage]) {
        return;
      }

      setCurrentPage(nextPage);
      setPageHistory((previousHistory) => {
        if (replace) {
          return [...previousHistory.slice(0, -1), nextPage];
        }

        if (previousHistory[previousHistory.length - 1] === nextPage) {
          return previousHistory;
        }

        return [...previousHistory, nextPage];
      });
    };

    const handleBack = () => {
      setPageHistory((previousHistory) => {
        if (previousHistory.length <= 1) {
          return previousHistory;
        }

        const nextHistory = previousHistory.slice(0, -1);
        setCurrentPage(nextHistory[nextHistory.length - 1]);
        return nextHistory;
      });
    };

    window.addEventListener(NAVIGATE_EVENT, handleNavigate);
    window.addEventListener(BACK_EVENT, handleBack);

    return () => {
      window.removeEventListener(NAVIGATE_EVENT, handleNavigate);
      window.removeEventListener(BACK_EVENT, handleBack);
    };
  }, []);

  const CurrentPage = PAGE_COMPONENTS[currentPage] || Home;

  return (
    <div className="w-full min-h-screen bg-[#F5F6FA]" data-page-key={currentPage}>
      <CurrentPage />
    </div>
  );
}

export default App;
