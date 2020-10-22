module.exports = function check(str, bracketsConfig) {
    const openings = {};
    const closings = {};

    for (const config of bracketsConfig) {
        const [open, close] = config;
        openings[open] = close;
        closings[close] = open;
    }

    const stack = [];

    for(let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        const close = openings[char];
        const open = closings[char];

        if ((open !== close && Boolean(close)) || (open === close && !stack.includes(char))) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (open !== last) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
