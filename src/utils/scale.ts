// src/utils/scale.ts
import { Dimensions, PixelRatio } from 'react-native';

/**
 * Baseline is your design draft size (commonly 375 x 812).
 * Change if your design Figma width/height differ.
 */
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Always read current dimensions (handles rotation / split-screen)
const getDims = () => Dimensions.get('window');

const roundDP = (v: number) => Math.round(PixelRatio.roundToNearestPixel(v));
const clamp = (v: number, min?: number, max?: number) =>
  Math.min(max ?? Number.POSITIVE_INFINITY, Math.max(min ?? 0, v));

/**
 * Fully scale by width (not usually recommended for icons/images alone).
 */
export const scale = (size: number) => {
  const { width } = getDims();
  return roundDP((width / BASE_WIDTH) * size);
};

/**
 * Fully scale by height.
 */
export const vScale = (size: number) => {
  const { height } = getDims();
  return roundDP((height / BASE_HEIGHT) * size);
};

/**
 * Moderate scaling by width:
 * - factor: how much to react to screen size (0=never, 1=fully). Default 0.5.
 * - min/max: optional clamps to keep sizes sane across extremes.
 */
export const mScale = (
  size: number,
  opts: { factor?: number; min?: number; max?: number } = {}
) => {
  const { width } = getDims();
  const { factor = 0.5, min, max } = opts;
  const full = (width / BASE_WIDTH) * size;
  const moderated = size + (full - size) * factor;
  return roundDP(clamp(moderated, min, max));
};

/**
 * Moderate scaling using the *shorter* side to stabilize across aspect ratios.
 * Good for icons/illustrations.
 */
export const shortScale = (
  size: number,
  opts: { factor?: number; min?: number; max?: number } = {}
) => {
  const { width, height } = getDims();
  const baseShort = Math.min(BASE_WIDTH, BASE_HEIGHT);
  const screenShort = Math.min(width, height);
  const { factor = 0.5, min, max } = opts;

  const full = (screenShort / baseShort) * size;
  const moderated = size + (full - size) * factor;
  return roundDP(clamp(moderated, min, max));
};

/**
 * Named helpers matching your old API (SW/SH) but with better behavior.
 * SW/SH = "size by width/height" (moderated). SShort = by shorter side.
 */
export const SW = (
  size: number,
  opts: { factor?: number; min?: number; max?: number } = {}
) => mScale(size, opts);

export const SH = (
  size: number,
  opts: { factor?: number; min?: number; max?: number } = {}
) => {
  const { height } = getDims();
  const { factor = 0.5, min, max } = opts;
  const full = (height / BASE_HEIGHT) * size;
  const moderated = size + (full - size) * factor;
  return roundDP(clamp(moderated, min, max));
};

export const SShort = shortScale;
