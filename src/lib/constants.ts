// ─── Brand Colors ────────────────────────────────────────────────────────────

export const brand = {
    // Backgrounds
    redBg:          'bg-[#b91c1c]',
    redDarkBg:      'bg-[#991b1b]',
    creamBg:        'bg-[#FAF9F6]',
    warmBg:         'bg-[#F0EDE6]',
    darkBg:         'bg-[#111110]',
    oliveBg:        'bg-[#6B7A3A]',
    navyBg:         'bg-[#1F2A44]',

    // Text
    redText:        'text-[#b91c1c]',
    creamText:      'text-[#FAF9F6]',
    darkText:       'text-[#111110]',
    midText:        'text-[#555550]',
    mutedText:      'text-[#888880]',
    oliveText:      'text-[#6B7A3A]',
    goldText:       'text-[#C9A84C]',

    // Legacy aliases
    redBgHover:     'hover:bg-[#dc2626]',
    amberText:      'text-[#C9A84C]',
    amberAltText:   'text-[#C9A84C]',
    amberLightText: 'text-[#e0c06a]',
    amberDivide:    'divide-[#C9A84C]',
    pageBg:         'bg-[#FAF9F6]',

    // Hex values
    hex: {
        red:       '#b91c1c',
        redDark:   '#991b1b',
        redLight:  '#dc2626',
        olive:     '#6B7A3A',
        navy:      '#1F2A44',
        gold:      '#C9A84C',
        cream:     '#FAF9F6',
        warm:      '#F0EDE6',
        dark:      '#111110',
    },
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────

export const typography = {
    heroHeading:    'text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none tracking-tight',
    sectionHeading: 'text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight',
    cardHeading:    'text-2xl sm:text-3xl font-semibold',
    bodyLg:         'text-lg sm:text-xl leading-relaxed',
    bodySm:         'text-base sm:text-lg leading-relaxed',
    eyebrow:        'section-label',
} as const;

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
    container: 'max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12',
    sectionPy: 'py-20 sm:py-28 lg:py-36',
} as const;
