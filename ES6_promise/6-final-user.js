import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    const results = await Promise.allSettled([signUpPromise, uploadPromise]);

    return results.map(result => {
        if (result.status === 'rejected') {
            return { status: result.status, value: `Error: ${result.reason}` };
        }
        return result;
    });
}
