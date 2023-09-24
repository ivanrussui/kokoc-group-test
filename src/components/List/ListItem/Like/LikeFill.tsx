import React from "react";
import {LikeType} from "./LikeType";

export const LikeFill: React.FC<LikeType> = ({className}) => {
    return (
        <svg className={`icon-like ${className}`} width="30" height="30" viewBox="0 0 30 30" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_57)">
                <path
                    d="M29.9505 9.37092C29.5126 4.55103 26.101 1.0541 21.8316 1.0541C18.9872 1.0541 16.3828 2.58476 14.9173 5.03798C13.4651 2.55303 10.9675 1.05352 8.16866 1.05352C3.89976 1.05352 0.487636 4.55045 0.0503028 9.37035C0.0156854 9.58324 -0.126246 10.7037 0.305317 12.5309C0.927276 15.1664 2.3639 17.5637 4.45883 19.4619L14.9104 28.9465L25.5414 19.4625C27.6363 17.5637 29.0729 15.167 29.6949 12.5309C30.1265 10.7043 29.9845 9.58382 29.9505 9.37092Z"
                    fill="#00A15C"/>
            </g>
            <defs>
                <clipPath id="clip0_2_57">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}