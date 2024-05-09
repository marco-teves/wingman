import {namedArr, getDifficultyName} from './getters.js';
const pageUrl = encodeURIComponent(location.href);

export function addSocialShare() {
    let presentedArr = '';
    namedArr.forEach((exercise) => {
        if (exercise !== 'get ready!' && exercise !== 'rest') {
            presentedArr += `${exercise}, `;
        };
    });
    
    let message = `Check out this workout I just created and completed with Wingman! ${encodeURIComponent('\n')}${presentedArr} with the difficulty level set to ${getDifficultyName} ${encodeURIComponent('\n')}Make your own at`;
    const twitterLink = `https://twitter.com/intent/tweet?text=${message}&url=${pageUrl}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    twitter.addEventListener('click', () => {
        window.open(twitterLink, '_blank')
    });
    facebook.addEventListener('click', () => {
        window.open(facebookLink, '_blank')
    });
};