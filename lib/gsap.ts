import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip, MotionPathPlugin, useGSAP);

  gsap.defaults({
    ease: "power3.out",
    duration: 1,
  });
}

export { gsap, ScrollTrigger, SplitText, Flip, MotionPathPlugin, useGSAP };
