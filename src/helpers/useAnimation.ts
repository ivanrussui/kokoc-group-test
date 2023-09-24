import { useEffect, useState } from "react";
import {AnimationType} from "./AnimationType";

export function useAnimation({ initialState, duration }: AnimationType): boolean {
    const [isShow, setShow] = useState(initialState);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setShow(true);
        }, duration);

        return () => {
            clearTimeout(animationTimeout);
        };
    }, [duration]);

    return isShow;
}