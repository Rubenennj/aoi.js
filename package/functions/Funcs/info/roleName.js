const { Role } = require('../../../Utils/helpers/functions.js');

module.exports = async d => {
    const data = d.util.openFunc(d);
    if (data.err) return d.error(data.err);

    const [roleId, guildId = d.guild?.id] = data.inside.splits;

    const guild = await d.util.getGuild(d, guildId);
    if (!guild) return d.aoiError.fnError(d, 'guild', { inside: data.inside });

    const role = await guild.roles.fetch(roleId).catch(err => {
        d.aoiError.fnError(d, 'role', { inside: data.inside });
    });

    data.result = role.name.deleteBrackets();

    return {
        code: d.util.setCode(data)
    }
}