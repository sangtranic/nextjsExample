
export const isValidURL = url => {
    if (url == undefined) {
        return false;
    }
    let result =
        url.indexOf('//') === 0
            ? true
            : url.indexOf('://') === -1
                ? false
                : url.indexOf('.') === -1
                    ? false
                    : url.indexOf('/') === -1
                        ? false
                        : url.indexOf(':') > url.indexOf('/')
                            ? false
                            : url.indexOf('://') < url.indexOf('.');

    return result;
};