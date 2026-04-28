import type { ReactNode, CSSProperties } from "react";

/* ─────────────────────────────────────────────────────────────
   WaveDivider — horizontal wave between two stacked sections
───────────────────────────────────────────────────────────── */
interface WaveDividerProps {
  topColor?:    string;
  bottomColor?: string;
  flip?:        boolean;
}

export function WaveDivider({
  topColor    = "#ffffff",
  bottomColor = "rgb(243,246,251)",
  flip        = false,
}: WaveDividerProps) {
  return (
    <div style={{ background: topColor, lineHeight: 0, overflow: "hidden", transform: flip ? "scaleX(-1)" : undefined }}>
      <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "90px" }}>
        <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   WaveSplitRow
   Image fills one half, text the other.
   The image edge is clipped with a smooth S-curve SVG path
   so it flows organically into the text background.

   FIX: use CSS clip-path polygon instead of SVG clipPath
   so it works regardless of element dimensions.
───────────────────────────────────────────────────────────── */
interface WaveSplitRowProps {
  imageSlot:  ReactNode;
  textSlot:   ReactNode;
  imageLeft?: boolean;
  bgColor?:   string;
  minHeight?: number;
  style?:     CSSProperties;
  className?: string;
}

export function WaveSplitRow({
  imageSlot,
  textSlot,
  imageLeft = true,
  bgColor   = "#ffffff",
  minHeight = 440,
  style,
  className,
}: WaveSplitRowProps) {
  /*
    CSS clip-path polygon that creates a wave on the inner edge.
    imageLeft=true  → wave on right side of image (cuts into text area)
    imageLeft=false → wave on left side of image (mirrored)

    We use a 5-point polygon that approximates the S-curve:
      top-left → top-right-inset → mid-right-bulge → bottom-right-inset → bottom-left
  */
  const clipLeft  = "polygon(0% 0%, 88% 0%, 100% 25%, 86% 50%, 100% 75%, 88% 100%, 0% 100%)";
  const clipRight = "polygon(12% 0%, 100% 0%, 100% 100%, 12% 100%, 0% 75%, 14% 50%, 0% 25%)";

  const imageClip = imageLeft ? clipLeft : clipRight;

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: `${minHeight}px`,
        background: bgColor,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* ── Image panel ── */}
      <div
        style={{
          order: imageLeft ? 0 : 1,
          position: "relative",
          overflow: "hidden",
          minHeight: `${minHeight}px`,
        }}
      >
        {/* full-bleed image */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            clipPath: imageClip,
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            {imageSlot}
          </div>
        </div>
      </div>

      {/* ── Text panel ── */}
      <div
        style={{
          order: imageLeft ? 1 : 0,
          display: "flex",
          alignItems: "center",
          padding: imageLeft ? "52px 52px 52px 36px" : "52px 36px 52px 52px",
          background: bgColor,
        }}
      >
        <div style={{ width: "100%", maxWidth: "520px" }}>{textSlot}</div>
      </div>
    </div>
  );
}
