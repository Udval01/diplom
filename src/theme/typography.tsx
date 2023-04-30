const TYPOGRAPHSIZES = {
    headline: { fontSize: 18, lineHeight: 24 },
    subheading: { fontSize: 15, lineHeight: 20 },
    subheading2: {
        fontSize: 13,
        lineHeight: 24,
    },
    paragraph: {
        fontSize: 13,
        lineHeight: 18,
    },
    caption1: {
        fontSize: 12,
        lineHeight: 16,
    },
    caption2: {
        fontSize: 11,
        lineHeight: 16,
    },
    title: {
        fontSize: 20,
        lineHeight: 24,
    },
};

export const TYPOGRAPHY = {
    headline: {
        light: { ...TYPOGRAPHSIZES.headline, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.headline, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.headline, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.headline, fontWeight: 'bold' },
    },
    subheading: {
        light: { ...TYPOGRAPHSIZES.subheading, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.subheading, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.subheading, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.subheading, fontWeight: 'bold' },
    },
    subheading2: {
        light: { ...TYPOGRAPHSIZES.subheading2, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.subheading2, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.subheading2, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.subheading2, fontWeight: 'bold' },
    },
    paragraph: {
        light: { ...TYPOGRAPHSIZES.paragraph, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.paragraph, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.paragraph, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.paragraph, fontWeight: 'bold' },
    },
    caption1: {
        light: { ...TYPOGRAPHSIZES.caption1, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.caption1, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.caption1, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.caption1, fontWeight: 'bold' },
    },
    caption2: {
        light: { ...TYPOGRAPHSIZES.caption2, fontWeight: '400' },
        medium: { ...TYPOGRAPHSIZES.caption2, fontWeight: '500' },
        main: { ...TYPOGRAPHSIZES.caption2, fontWeight: '600' },
        bold: { ...TYPOGRAPHSIZES.caption2, fontWeight: 'bold' },
    },
    title: {
        main: { ...TYPOGRAPHSIZES.title, fontWeight: '700' },
        light: { ...TYPOGRAPHSIZES.title, fontWeight: '400' },
    },
};

export type TypographyTypes =
    | 'headline.light'
    | 'headline.medium'
    | 'headline.main'
    | 'headline.bold'
    | 'subheading.light'
    | 'subheading.medium'
    | 'subheading.main'
    | 'subheading.bold'
    | 'subheading2.light'
    | 'subheading2.medium'
    | 'subheading2.main'
    | 'subheading2.bold'
    | 'paragraph.light'
    | 'paragraph.medium'
    | 'paragraph.main'
    | 'paragraph.bold'
    | 'caption1.light'
    | 'caption1.medium'
    | 'caption1.main'
    | 'caption1.bold'
    | 'caption2.light'
    | 'caption2.medium'
    | 'caption2.main'
    | 'caption2.bold'
    | 'title.main'
    | 'title.light';
