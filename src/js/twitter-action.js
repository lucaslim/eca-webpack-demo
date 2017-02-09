export const getTwitterData = () => {
    return require.ensure([], require => {
        const randomProfile = require('random-profile-generator');
        const arnold = require('running-man');
        
        const profile = randomProfile.profile();

        return {
            picture: profile.avatar,
            name: profile.fullName,
            username: profile.twitter,
            content: arnold.quote(),
            time: new Date(),
        }
    }, 'Get Twitter Action Component');
}

export default getTwitterData;