export const brand = {
  redBg:          'bg-[#b91c1c]',
  redBgHover:     'hover:bg-[#dc2626]',
  pageBg:         'bg-zinc-950',
  redText:        'text-[#b91c1c]',
  amberText:      'text-amber-400',
  amberAltText:   'text-amber-500',
  amberLightText: 'text-amber-300',
  redBorder:      'border-[#b91c1c]',
  amberDivide:    'divide-amber-400',
  hex: {
    red:      '#b91c1c',
    redHover: '#dc2626',
    amber:    '#fbbf24',
    amberAlt: '#f59e0b',
    olive:    '#6B7A3A',
    navy:     '#1F2A44',
    bg950:    '#09090b',
    bg900:    '#18181b',
    bg800:    '#27272a',
  },
} as const;

export const typography = {
  heroHeading:    'text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight',
  sectionHeading: 'text-3xl sm:text-4xl lg:text-5xl font-semibold',
  cardHeading:    'text-xl sm:text-2xl font-semibold',
  bodyLg:         'text-base sm:text-lg',
  bodySm:         'text-sm sm:text-base',
  eyebrow:        'text-[10px] font-bold tracking-[0.3em] uppercase',
} as const;

export const layout = {
  container: 'max-w-7xl mx-auto px-6',
  sectionPy: 'py-24 lg:py-32',
} as const;
