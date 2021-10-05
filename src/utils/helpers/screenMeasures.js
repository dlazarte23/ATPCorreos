export const getSpan = () => {
    const width = window.screen.width;
    if (width >= 1920) {
        return 12;
    } else if (width >= 1280) {
        return 16;
    } else {
        return 24;
    }
};

export const getOffset = () => {
    const width = window.screen.width;
    if (width >= 1920) {
        return 6;
    } else if (width >= 1280) {
        return 4;
    } else {
        return 0;
    }
};