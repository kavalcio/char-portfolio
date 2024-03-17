import { useState, useRef, useEffect } from "react";

type Props = {
  source: string
}

const Image = ({ source }: Props) => {
  const [isVisible, setVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const previouslyLoaded = (entry.target?.children[0] as HTMLImageElement)?.complete;
        if (entry.isIntersecting && (isLoaded || previouslyLoaded)) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [isLoaded]);

  return (
    <div
      className={`post-content-image-container fade-in-section ${isVisible ? 'is-visible' : ''} ${isFullscreen ? 'fullscreen' : ''}`}
      onClick={() => {
        if (isFullscreen) setIsFullscreen(false);
      }}
      ref={domRef}
    >
      <img
        className={`post-content-image hover:cursor-zoom-in`}
        src={source}
        onLoad={() => setIsLoaded(true)}
        onClick={() => {
          if (!isFullscreen) setIsFullscreen(true);
        }}
      />
    </div>
  )
}

export default Image
