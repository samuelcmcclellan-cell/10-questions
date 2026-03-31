import { useState, useEffect, useCallback } from 'react';
import TitleSlide from './components/TitleSlide';
import QuestionSlide from './components/QuestionSlide';
import ClosingSlide from './components/ClosingSlide';
import Navigation from './components/Navigation';
import PasswordGate from './components/PasswordGate';
import { QUESTIONS_DATA } from './data/questions';

// Total slides: title (0) + 12 questions (1-12) + closing (13)
const TOTAL_SLIDES = QUESTIONS_DATA.length + 2;

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('authenticated') === 'true'
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    const target = Math.max(0, Math.min(TOTAL_SLIDES - 1, index));
    if (target === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(target);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [currentSlide, isTransitioning]);

  const navigate = useCallback((direction) => {
    goToSlide(currentSlide + direction);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigate(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const renderSlide = () => {
    if (currentSlide === 0) {
      return <TitleSlide onStart={() => goToSlide(1)} />;
    }
    if (currentSlide === TOTAL_SLIDES - 1) {
      return <ClosingSlide onRestart={() => goToSlide(0)} />;
    }
    const questionIndex = currentSlide - 1;
    return (
      <QuestionSlide
        data={QUESTIONS_DATA[questionIndex]}
        currentIndex={questionIndex}
        total={QUESTIONS_DATA.length}
        isVisible={true}
      />
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen bg-navy">
        <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-navy overflow-hidden relative">
      {/* Slide content with transition */}
      <div
        key={currentSlide}
        className="w-full h-full"
        style={{
          animation: 'fadeIn 0.3s ease forwards',
        }}
      >
        {renderSlide()}
      </div>

      {/* Navigation overlay */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNavigate={navigate}
        onDotClick={goToSlide}
      />
    </div>
  );
}
