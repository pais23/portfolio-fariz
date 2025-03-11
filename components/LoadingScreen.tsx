import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import handshakeAnimation from '../public/handshake-animation.json';

interface LoadingScreenProps {
  loading: boolean;
  fadeOut: boolean;
  translations: any;
  language: 'id' | 'en';
}

export default function LoadingScreen({ loading, fadeOut, translations, language }: LoadingScreenProps) {
  // Helper function to get translated text
  const t = (key: string) => translations[language][key];

  if (!loading) return null;

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-gray-900 z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center px-4 text-center">
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <Lottie animationData={handshakeAnimation} loop={true} />
        </div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 text-teal-600 font-bold dark:text-teal-400 mt-4'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t('preloadText'))
                .start();
            }}
            options={{
              delay: 20,
              deleteSpeed: 20,
            }}
          />
        </h1>
      </div>
    </div>
  );
} 