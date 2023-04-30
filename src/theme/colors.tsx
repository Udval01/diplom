export const colors = {
    white: { main: '#FFFFFF' },
    black: { main: '#000000' },
    transparent: { main: 'transparent' },
    gray: {
        5: '#F3F4F6',
        10: '#F8F9FA',
        20: '#E8EAED',
        30: '#C8C8C8',
        35: '#D5D7DB',
        40: '#7E8085',
        50: '#404145',
    },
    blue: {
        light: '#DBDFF1',
        main: '#187EEC',
    },
    purple: {
        main: '#7C4DFF',
        light: '#BAB1FF',
    },
    aqua: {
        main: '#37CDFA',
        light: '#DEF6FC',
    },
    green: {
        main: '#5EB14E',
        hover: '#18B52D',
        light: '#E7F3E4',
        dark: '#50A141',
        opacity: '#DFEFDC',
    },
    orange: {
        main: '#FEC63D',
        light: '#FDE7B1',
    },
    red: {
        main: '#F4495D',
        light: '#FAF2F4',
    },
    yellow: {
        main: '#FEC63D',
        light: '#FDE7B1',
    },
    overlay: {
        main: 'rgba(18,18,18,0.3)',
    },
    opacity: {
        main: 'rgba(94, 177, 78, 0.1);',
    },
};

export type ColorTypes =
    | 'white.main'
    | 'black.main'
    | 'transparent'
    | 'gray.5'
    | 'gray.10'
    | 'gray.20'
    | 'gray.30'
    | 'gray.35'
    | 'gray.40'
    | 'gray.50'
    | 'blue.light'
    | 'blue.main'
    | 'purple.light'
    | 'purple.main'
    | 'aqua.light'
    | 'aqua.main'
    | 'green.light'
    | 'green.dark'
    | 'green.main'
    | 'green.hover'
    | 'green.opacity'
    | 'orange.light'
    | 'orange.main'
    | 'red.light'
    | 'red.main'
    | 'yellow.main'
    | 'yallow.light'
    | 'overlay.main'
    | 'opacity.main';
