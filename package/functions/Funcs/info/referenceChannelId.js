module.exports = d => {
    let { code, result } = d.util.openFunc(d);

    result = d.message?.reference?.channelId;

    return {
        code: d.util.setCode({ function: d.func, code, result })
    }
}