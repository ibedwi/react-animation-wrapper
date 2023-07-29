"use client";

import { CSSProperties, PropsWithChildren, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

type AnimationWrapperProps = PropsWithChildren<{
  initialClassName?: string;
  onEnterAnimation?: string;
  onExitAnimation?: string;
  wrapperStyles?: CSSProperties;
  wrapperClassName?: string;
  threshold?: number;
}>;

function AnimationWrapper(props: AnimationWrapperProps) {
  const { ref, inView } = useInView({
    threshold: props.threshold ?? 0.8,
  });

  const [animationCls, setAnimationCls] = useState(
    props.initialClassName ?? ""
  );

  useEffect(() => {
    if (inView && props.onEnterAnimation) {
      setAnimationCls(props.onEnterAnimation ?? "");
    }
    if (inView && props.onExitAnimation) {
      setAnimationCls(props.onEnterAnimation ?? "");
    }
  }, [inView, props.onEnterAnimation, props.onExitAnimation]);

  return (
    <div
      ref={ref}
      style={props.wrapperStyles}
      className={props.wrapperClassName}
    >
      <div className={cn("animation-wrapper", animationCls)}>
        {props.children}
      </div>
    </div>
  );
}

export { AnimationWrapper };
