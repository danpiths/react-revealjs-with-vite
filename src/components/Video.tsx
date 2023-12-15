export default function Video({
  videoSrc,
  autoplay,
}: {
  videoSrc: {
    media: string;
    type: string;
  };
  autoplay?: boolean;
}): React.ReactElement {
  return (
    <video
      data-autoplay={autoplay ? autoplay : null}
      data-src={videoSrc.media}
      controls
      data-prevent-swipe
    >
      Your browser does not support the video tag.
    </video>
  );
}
