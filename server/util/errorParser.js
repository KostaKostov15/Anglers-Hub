function parseError(error) {
    if (Array.isArray(error)) {
        // can return array with errors
        return error.map((e) => e.message).join('\n');
    } else if (error.name == 'ValidationError') {
        return Object.values(error.errors)
            .map((v) => v.message)
            .join('\n');
    } else {
        // can return array
        return error.message;
    }
}

module.exports = {
    parseError,
};
