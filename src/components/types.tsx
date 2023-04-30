type BackgroundRoleType =
    | 'success'
    | 'light'
    | 'primary'
    | 'info'
    | 'error'
    | 'secondary'
    | 'tertiary'
    | 'transparent'
    | 'overlay'
    | 'accent'
    | 'lightGreen'
    | 'yellow'
    | 'lightGreen2'
    | 'lightCyan'
    | 'lightYellow'
    | 'lightSuccess'
    | 'opacity'
    | 'lightGray'
    | 'darkGray'
    | 'gray'
    | 'white';

type lineTypes = 'dotted' | 'dashed' | 'solid' | 'black';

type MarginType = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    size?: Array<number>;
    children?: any;
    role?: BackgroundRoleType;
    grow?: number;
};
type PaddingType = {
    top?: number;
    bottom?: number;
    children?: any;
    left?: number;
    right?: number;
    size?: Array<number>;
    role?: BackgroundRoleType;
};

type QueueType = {
    size?: number;
    role?: BackgroundRoleType;
    children: any;
    justifyContent?:
    | 'flex-start'
    | 'space-between'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    height?: number | string;
    width?: number | string;
};

type StackType = {
    size?: number;
    children: any;
    role?: BackgroundRoleType;
    height?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    zIndex?: number;
    justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
};

type RemoteImageType = {
    source?: object;
    url?: string;
    aspectRatio?: number;
    resizeMode?: 'cover' | 'contain' | 'stretch';
    width?: string | number;
};

type CautionType = {
    icon?: JSX.Element;
    text: string;
    role?: BackgroundRoleType;
    width?: number | string;
};

type TextRoleType =
    | 'success'
    | 'light'
    | 'primary'
    | 'info'
    | 'error'
    | 'secondary'
    | 'tertiary'
    | 'gray50'
    | 'gray40'
    | 'darkGray';
