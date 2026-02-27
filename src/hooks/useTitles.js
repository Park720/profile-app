import { useEffect } from "react";

const useTitles = (title) => {
    useEffect(() => {
        document.title = `${title} | Profile App`;
    }, [title]);
};

export default useTitles;