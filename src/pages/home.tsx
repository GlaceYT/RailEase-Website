import React, { useState, useEffect } from 'react';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import AppOptions from '../components/appotions';
import styled, { keyframes } from 'styled-components';
import ChatPage from '../components/chatPage';  
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'; 
import { FaArrowUp } from 'react-icons/fa'; // For the scroll-to-top icon
import Problem from '../components/problem';
import Solutions from '../components/solution';
// import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import Footer from "../components/footer";

const openChat = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const BubbleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 0;
  cursor: pointer;
`;

const Bubble = styled.div`
  background-color: #1971c2;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  border: 3px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 80px;
  left: 20px;
  width: 400px;
  height: 500px;
  max-width: 90vw;
  max-height: 90vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: ${openChat} 0.4s ease-out;
  z-index: 0;
`;

// Scroll-to-top button styles
const ScrollToTopButton = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: #1971c2;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 2000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

// Progress bar styles
const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ width }) => width}%;
  height: 4px;
  background-color: #1971c2;
  z-index: 9999;
`;

const Home: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsChatOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollProgress(scrolled);

    if (scrollTop > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
      <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <AppOptions/>
            <Problem />
            <Solutions />
            {/* <Testimonials /> */}
            <FAQ />
            <Footer />
            <ProgressBar width={scrollProgress} />
            <BubbleContainer onClick={toggleChat}>
        <Bubble>
          <IoChatbubbleEllipsesSharp />
        </Bubble>
      </BubbleContainer>
      <ScrollToTopButton show={showScrollToTop} onClick={scrollToTop}>
        <FaArrowUp />
      </ScrollToTopButton>
      {isChatOpen && (
        <ChatWindow>
          <ChatPage />
        </ChatWindow>
      )}
        </div>
  );
};

export default Home;
