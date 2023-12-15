import React from "react";

/**
 * Use `data-id` to match elements
 */
export default function Slide(props: Props): React.ReactElement {
  return (
    <section
      className={`h-full justify-center items-center flex-col ${props.className}`}
      data-background-color={
        props.background?.bgColor ? props.background?.bgColor : null
      }
      data-background-image={
        props.background?.bgImage ? props.background?.bgImage : null
      }
      data-background-gradient={
        props.background?.bgGradient ? props.background?.bgGradient : null
      }
      data-background-video={
        props.background?.bgVideo ? props.background?.bgVideo : null
      }
      data-background-iframe={
        props.background?.bgIframe ? props.background?.bgIframe.src : null
      }
      data-background-interactive={
        props.background?.bgIframe
          ? props.background?.bgIframe.interactive
          : null
      }
      data-auto-animate={
        props.animation?.autoAnimate ? props.animation?.autoAnimate : null
      }
      data-auto-animate-easing={
        props.animation?.animationConfig?.easing
          ? props.animation?.animationConfig.easing
          : null
      }
      data-auto-animate-duration={
        props.animation?.animationConfig?.duration
          ? props.animation?.animationConfig.duration
          : null
      }
      data-auto-animate-delay={
        props.animation?.animationConfig?.delay
          ? props.animation?.animationConfig.delay
          : null
      }
      data-notes={props.notes ? props.notes : null}
      data-timing={props.slideTime ? props.slideTime : null}
    >
      {props.children}
    </section>
  );
}

type Props = {
  children: React.ReactNode;
  className?: string;
  background?: {
    bgImage?: string;
    bgColor?: string;
    bgGradient?: string;
    bgVideo?: string;
    bgIframe?: {
      src: string;
      interactive?: boolean;
    };
  };
  animation?: {
    autoAnimate?: boolean;
    animationConfig?: {
      easing?: "ease" | "ease-in" | "ease-out" | "ease-in-out";
      duration?: number;
      delay?: number;
    };
  };
  notes?: string;
  slideTime?: number;
};
