export const Colors = {
  // Primary Brand Color - Green
  primary: {
    green: '#00C900',        // Base green
    green50: '#E6FFE6',      // Lightest
    green100: '#CCFFCC',
    green200: '#99FF99',
    green300: '#66FF66',
    green400: '#33FF33',
    green500: '#00C900',     // Base
    green600: '#00A800',
    green700: '#008700',
    green800: '#006600',
    green900: '#004400',
  },

  // Gray Scale (unchanged)
  gray: {
    base: '#BBBBBB',
    50: '#F8F8F8',
    100: '#F0F0F0',
    200: '#E8E8E8',
    300: '#DDDDDD',
    400: '#BBBBBB',
    500: '#999999',
    600: '#777777',
    700: '#555555',
    800: '#333333',
    900: '#111111',
  },

  // Semantic Colors
  brand: {
    primary: '#00C900',      // Main brand color - Green
    secondary: '#BBBBBB',    // Secondary brand color - Gray
    accent: '#66FF66',       // Accent color - Light Green
    highlight: '#CCFFCC',    // Highlight color - Very Light Green
  },

  // UI Colors
  ui: {
    primary: '#00C900',      // Primary UI elements - Green
    secondary: '#BBBBBB',    // Secondary UI elements - Gray
    success: '#00A800',      // Success - Dark Green
    warning: '#F0B27A',      // Warning - Soft Orange
    error: '#E86F6F',        // Error - Soft Red
    info: '#66FF66',         // Info - Light Green
    disabled: '#E8E8E8',     // Disabled state - Light Gray
    border: '#DDDDDD',       // Border color - Medium Light Gray
    card: '#FFFFFF',         // Card background - White
    background: '#F8F8F8',   // App background - Light Gray
  },

  // Text Colors
  text: {
    primary: '#333333',      // Primary text - Dark Gray
    secondary: '#666666',    // Secondary text - Gray
    tertiary: '#999999',     // Tertiary text - Medium Gray
    disabled: '#BBBBBB',     // Disabled text - Base Gray
    inverse: '#FFFFFF',      // Text on dark backgrounds - White
    link: '#00A800',         // Link text - Dark Green
    linkHover: '#008700',    // Link hover - Even Darker Green
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',      // Primary background - White
    secondary: '#F8F8F8',    // Secondary background - Light Gray
    tertiary: '#F0F0F0',     // Tertiary background - Very Light Gray
    inverse: '#333333',      // Inverse background - Dark Gray
    overlay: 'rgba(51,51,51,0.5)', // Overlay for modals - Dark Gray with opacity
  },

  // Status Colors
  status: {
    active: '#00C900',       // Active state - Green
    inactive: '#DDDDDD',     // Inactive state - Medium Light Gray
    online: '#00A800',       // Online status - Dark Green
    offline: '#999999',      // Offline status - Medium Gray
    busy: '#E86F6F',         // Busy status - Soft Red
    away: '#F0B27A',         // Away status - Soft Orange
  },

  // Gradient Combinations
  gradients: {
    primary: ['#00C900', '#00A800'],
    secondary: ['#BBBBBB', '#999999'],
    accent: ['#66FF66', '#00C900'],
    sunset: ['#F0B27A', '#E86F6F'],
    ocean: ['#00C900', '#66FF66'],
  },

  // Opacity Variants
  opacity: {
    green10: 'rgba(0, 201, 0, 0.1)',
    green20: 'rgba(0, 201, 0, 0.2)',
    green30: 'rgba(0, 201, 0, 0.3)',
    green40: 'rgba(0, 201, 0, 0.4)',
    green50: 'rgba(0, 201, 0, 0.5)',
    green60: 'rgba(0, 201, 0, 0.6)',
    green70: 'rgba(0, 201, 0, 0.7)',
    green80: 'rgba(0, 201, 0, 0.8)',
    green90: 'rgba(0, 201, 0, 0.9)',
    green100: 'rgba(0, 201, 0, 1)',

    gray10: 'rgba(187, 187, 187, 0.1)',
    gray20: 'rgba(187, 187, 187, 0.2)',
    gray30: 'rgba(187, 187, 187, 0.3)',
    gray40: 'rgba(187, 187, 187, 0.4)',
    gray50: 'rgba(187, 187, 187, 0.5)',
    gray60: 'rgba(187, 187, 187, 0.6)',
    gray70: 'rgba(187, 187, 187, 0.7)',
    gray80: 'rgba(187, 187, 187, 0.8)',
    gray90: 'rgba(187, 187, 187, 0.9)',
    gray100: 'rgba(187, 187, 187, 1)',
  },

  // Chart Colors
  charts: [
    '#00C900', // Green
    '#00A800', // Dark Green
    '#BBBBBB', // Gray
    '#66FF66', // Light Green
    '#F0B27A', // Soft Orange
    '#E86F6F', // Soft Red
    '#33FF33', // Bright Green
    '#999999', // Medium Gray
  ],

  // Dark Mode Variants
  dark: {
    primary: '#66FF66',      // Lighter green for dark mode
    background: '#1A1A1A',
    surface: '#2D2D2D',
    text: '#FFFFFF',
    textSecondary: '#BBBBBB',
    border: '#404040',
  },
};

// Simplified version for quick access
export const BrandColors = {
  green: '#00C900',
  greenLight: '#66FF66',
  greenDark: '#00A800',
  greenDarker: '#008700',
  gray: '#BBBBBB',
  grayDark: '#666666',
  grayDarker: '#333333',
};

// Flat version for easier use in styles
export const FlatColors = {
  // Primary
  green: '#00C900',
  greenLight: '#66FF66',
  greenLighter: '#99FF99',
  greenLightest: '#CCFFCC',
  greenDark: '#00A800',
  greenDarker: '#008700',
  greenDarkest: '#006600',

  // Gray
  gray: '#BBBBBB',
  grayLight: '#DDDDDD',
  grayLighter: '#E8E8E8',
  grayLightest: '#F8F8F8',
  grayDark: '#777777',
  grayDarker: '#555555',
  grayDarkest: '#333333',

  // UI
  success: '#00A800',
  warning: '#F0B27A',
  error: '#E86F6F',
  info: '#66FF66',

  // Text
  textPrimary: '#333333',
  textSecondary: '#666666',
  textTertiary: '#999999',
  textDisabled: '#BBBBBB',
  textInverse: '#FFFFFF',

  // Background
  bgPrimary: '#FFFFFF',
  bgSecondary: '#F8F8F8',
  bgTertiary: '#F0F0F0',
  bgDark: '#333333',
};