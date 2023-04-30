import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs } from 'react-native-svg';
import { IllustrationType } from './types';

const EmptyCartIllustration = (props: IllustrationType) => {
    const { height, width } = props;
    return (
        <Svg
            width={width || 151}
            height={height || 128}
            viewBox="0 0 151 128"
            fill="none"
            {...props}
        >
            <Path
                opacity={0.15}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M126.864 120.777c13.823-7.401 23.225-21.97 23.225-38.736 0-18.552-11.512-34.417-27.788-40.854.021-.494.038-.989.038-1.488 0-18.484-14.997-33.468-33.498-33.468-12.3 0-23.046 6.63-28.872 16.503-.126-.001-.252-.005-.379-.005C27.02 22.729.617 49.11.617 81.652c0 15.017 5.625 28.719 14.882 39.125h111.366z"
                fill="#5EB14E"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.756 65.2h5.36l17.383 37.4h34.766l6.322-23.177H44.232"
                fill="#000"
                fillOpacity={0.01}
            />
            <Path
                d="M26.756 65.2h5.36l17.383 37.4h34.766l6.322-23.177H44.232"
                stroke="#000"
                strokeWidth={1.573}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.471 79.423l-6.32 22.387 6.32-22.387zM67.409 79.95l-6.322 22.386 6.322-22.387zM56.348 80.213L50.026 102.6l6.322-22.387z"
                fill="#000"
                fillOpacity={0.01}
                stroke="#000"
                strokeWidth={1.573}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.232 88.904l42.404.527-42.404-.527z"
                fill="#000"
                fillOpacity={0.01}
                stroke="#000"
                strokeWidth={1.573}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.499 103.39l2.37 6.585h29.763"
                fill="#000"
                fillOpacity={0.01}
            />
            <Path
                d="M49.499 103.39l2.37 6.585h29.763"
                stroke="#000"
                strokeWidth={1.573}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.285 115.66a5.048 5.048 0 11-10.096-.002 5.048 5.048 0 0110.096.002zM82.223 115.418a5.048 5.048 0 11-10.095 0 5.048 5.048 0 0110.095 0z"
                fill="#fff"
                stroke="#000"
                strokeWidth={0.787}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.223 115.418a5.048 5.048 0 11-10.095 0 5.048 5.048 0 0110.095 0z"
                fill="#fff"
                stroke="#000"
                strokeWidth={0.787}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.177 117.515A2.174 2.174 0 0175 115.339c0-1.204.972-2.177 2.176-2.177 1.203 0 2.176.973 2.176 2.177a2.174 2.174 0 01-2.176 2.176zM56.238 117.836a2.175 2.175 0 01-2.176-2.177c0-1.203.973-2.175 2.176-2.175 1.204 0 2.176.972 2.176 2.175a2.175 2.175 0 01-2.176 2.177z"
                fill="#5EB14E"
                stroke="#000"
                strokeWidth={0.787}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.754 125.66h144.484H2.754z"
                fill="#fff"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.393 43.72c-15.064 23.123-14.935 54.13 2.6 77.476l-2.6-77.475z"
                fill="#000"
                fillOpacity={0.01}
            />
            <Path
                d="M21.393 43.72c-15.064 23.123-14.935 54.13 2.6 77.476"
                stroke="#000"
                strokeWidth={0.706}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.033 40.855c.006.938-.814 1.704-1.832 1.71-1.018.006-1.848-.748-1.854-1.686-.006-.938.814-1.703 1.831-1.71 1.019-.007 1.85.748 1.855 1.686z"
                fill="#000"
            />
            <G
                clipPath="url(#prefix__clip0)"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <Path
                    d="M80.386 27.793l-9.742 21.233 24.11 11.064 9.579-20.873-16.56-7.9-7.387-3.524z"
                    fill="#FCFCFC"
                />
                <Path
                    d="M91.731 22.69l8.877 4.072L84.535 61.79l-8.877-4.073 16.073-35.028z"
                    fill="#5EB14E"
                    stroke="#000"
                    strokeWidth={0.97}
                />
                <Path
                    d="M80.386 27.793l-9.742 21.233 24.11 11.064 9.579-20.873-16.56-7.9-7.387-3.524z"
                    fill="#000"
                    fillOpacity={0.01}
                    stroke="#000"
                    strokeWidth={0.97}
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.42 20.746l15.441 8.711-15.442-8.71zM114.802 9.462l-8.711 15.442 8.711-15.442zM80.65 1.94l4.95 17.024-4.95-17.025z"
                fill="#FECA57"
                stroke="#000"
                strokeWidth={0.97}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M134.774 88.392c0 15.421-12.339 27.922-27.558 27.922-15.218 0-27.554-12.501-27.554-27.922 0-15.42 12.336-27.922 27.554-27.922 15.219 0 27.558 12.501 27.558 27.922z"
                fill="#fff"
                stroke="#000"
                strokeWidth={0.855}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.27 102.007c4.916-5.288 13.182-5.587 18.467-.674l-18.468.674z"
                fill="#000"
                fillOpacity={0.01}
            />
            <Path
                d="M97.27 102.007c4.916-5.288 13.182-5.587 18.467-.674"
                stroke="#000"
                strokeWidth={0.855}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.456 81.666c.007 1.136-.986 2.063-2.217 2.07-1.233.008-2.238-.905-2.245-2.04-.007-1.135.986-2.062 2.217-2.07 1.233-.01 2.238.905 2.245 2.04zM116.403 81.666c.007 1.136-.985 2.063-2.217 2.07-1.232.008-2.237-.905-2.245-2.04-.006-1.135.986-2.062 2.218-2.07 1.233-.01 2.238.905 2.244 2.04z"
                fill="#000"
            />
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path
                        fill="#fff"
                        transform="translate(69 20)"
                        d="M0 0h37.818v43.636H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default EmptyCartIllustration;
