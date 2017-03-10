export const getTwitterData = () => {
	
	/**
	 * Webpack would split this part into a single file.
	 * 
	 * require.ensure(['dependencies'], function() { }, 'filename');
	 */
	return require.ensure([], require => {
		const randomProfile = require('random-profile-generator');
		const arnold = require('running-man');
		const profile = randomProfile.profile();

		require('images/some-image.jpg');

		return new Promise(resolve => {
			resolve({
				picture: profile.avatar,
				name: profile.fullName,
				username: profile.twitter,
				content: arnold.quote(),
				time: new Date(),
			});
		})
	}, 'twitter-action-component');
}

export default getTwitterData;
