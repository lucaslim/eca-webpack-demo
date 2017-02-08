export const getTwitterData = () => {
    return require.ensure([], require => {
        const randomName = require('random-name');
        const arnold = require('running-man');

        return {
            picture: 'http://lorempixel.com/128/128/people/',
            name: `${randomName.first()} ${randomName.last()}`,
            username: randomName.middle().toLowerCase(),
            content: arnold.quote(),
            time: new Date(),
        }
    }, 'Get Twitter Action Component');
}

export default getTwitterData;