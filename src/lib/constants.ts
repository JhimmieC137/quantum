// ─── Brand Colors ────────────────────────────────────────────────────────────

export const brand = {
    // Backgrounds
    oliveBg:        'bg-[#6B7A3A]',
    oliveDarkBg:    'bg-[#556030]',
    navyBg:         'bg-[#1F2A44]',
    navyDarkBg:     'bg-[#151d30]',
    pageBg:         'bg-[#F5F3ED]',
    darkBg:         'bg-[#0e1520]',

    // Text
    oliveText:      'text-[#6B7A3A]',
    oliveLightText: 'text-[#8a9c4a]',
    navyText:       'text-[#1F2A44]',
    goldText:       'text-[#C9A84C]',
    goldLightText:  'text-[#e0c06a]',

    // Legacy aliases (keep for components not yet updated)
    redBg:          'bg-[#6B7A3A]',
    redBgHover:     'hover:bg-[#556030]',
    amberBg:        'bg-[#C9A84C]',
    redText:        'text-[#6B7A3A]',
    amberText:      'text-[#C9A84C]',
    amberAltText:   'text-[#C9A84C]',
    amberLightText: 'text-[#e0c06a]',
    redBorder:      'border-[#6B7A3A]',
    amberDivide:    'divide-[#C9A84C]',

    // Hex values
    hex: {
        olive:      '#6B7A3A',
        oliveDark:  '#556030',
        oliveLight: '#8a9c4a',
        navy:       '#1F2A44',
        navyDark:   '#151d30',
        gold:       '#C9A84C',
        goldLight:  '#e0c06a',
        cream:      '#F5F3ED',
        dark:       '#0e1520',
    },
} as const;

// ─── Typography ──────────────────────────────────────────────────────────────

export const typography = {
    heroHeading:    'text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight',
    sectionHeading: 'text-4xl sm:text-5xl font-semibold',
    cardHeading:    'text-2xl sm:text-3xl font-semibold',
    bodyLg:         'text-base sm:text-lg',
    bodySm:         'text-sm sm:text-base',
    eyebrow:        'text-xs font-bold tracking-widest uppercase',
} as const;

// ─── Layout ──────────────────────────────────────────────────────────────────

export const layout = {
    container: 'max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8',
    sectionPy: 'py-16 sm:py-24 lg:py-32',
} as const;
