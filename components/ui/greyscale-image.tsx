import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

interface GreyscaleImageProps extends ImageProps {
  /**
   * Renders the soft blurred underlay that sits behind media in the design
   * (Figma: `rgba(191,193,196,0.05)` at `blur(20px)`, inset -16px).
   */
  halo?: boolean;
  /** Applied to the positioning wrapper rather than the image itself. */
  wrapperClassName?: string;
}

/**
 * Every photograph in the design is desaturated. Figma does it with a white
 * `mix-blend-saturation` overlay; `saturate(0)` is the same result for one
 * fewer composited layer.
 */
export function GreyscaleImage({
  halo = false,
  wrapperClassName,
  className,
  alt,
  ...props
}: GreyscaleImageProps) {
  return (
    <div className={cn("relative", wrapperClassName)}>
      {halo && (
        <div
          aria-hidden
          className="bg-halo rounded-media absolute -inset-4 blur-[20px]"
        />
      )}
      <Image className={cn("relative saturate-0", className)} alt={alt} {...props} />
    </div>
  );
}
