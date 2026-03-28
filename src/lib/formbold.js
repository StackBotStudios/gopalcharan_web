/** FormBold form endpoint — fields: email, subject, message, file (optional) */
export const FORMBOLD_ENDPOINT = "https://formbold.com/s/3dqEe";

/**
 * @param {FormData} formData
 * @returns {Promise<Response>}
 */
export async function submitToFormBold(formData) {
    return fetch(FORMBOLD_ENDPOINT, {
        method: "POST",
        body: formData,
    });
}
