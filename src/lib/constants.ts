// ─── Brand Colors ────────────────────────────────────────────────────────────
// These are full Tailwind class strings so Tailwind's purger detects them.
// Import and spread into className instead of writing the class directly.

export const brand = {
    // Backgrounds
    redBg:          'bg-red-700',
    redBgHover:     'hover:bg-red-600',
    amberBg:        'bg-amber-400',
    pageBg:         'bg-[#F4F2EC]',

    // Text
    redText:        'text-red-700',
    amberText:      'text-amber-400',
    amberAltText:   'text-amber-500',
    amberLightText: 'text-amber-300',

    // Borders / dividers
    redBorder:      'border-red-700',
    amberDivide:    'divide-amber-500',

    // Hex values (for inline styles or non-Tailwind contexts, e.g. email templates)
    hex: {
        red:        '#b91c1c',   // red-700
        redHover:   '#dc2626',   // red-600
        amber:      '#fbbf24',   // amber-400
        amberAlt:   '#f59e0b',   // amber-500
        bg:         '#F4F2EC',
        dark:       '#27272a',   // zinc-800
        darker:     '#18181b',   // zinc-900
    },
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────

export const typography = {
    // Section headings
    heroHeading:    'text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight',
    sectionHeading: 'text-4xl sm:text-5xl font-semibold',
    cardHeading:    'text-2xl sm:text-3xl font-semibold',

    // Body
    bodyLg:         'text-base sm:text-lg',
    bodySm:         'text-sm sm:text-base',

    // Labels / eyebrows
    eyebrow:        'text-xs font-bold tracking-widest uppercase',
} as const;

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
    // Max-width content wrapper
    container:      'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8',

    // Standard section vertical padding
    sectionPy:      'py-16 sm:py-24 lg:py-32',
} as const;
