export default (validators) => (values) => Object.keys(validators).reduce(
    async (errors, field) => {
        const fieldValidators = validators[field];
        if (!fieldValidators) return errors;
        const fieldErrors = await Promise.all(fieldValidators.map(validator => validator(values)));
        if (fieldErrors && fieldErrors.length) {
            const oldErrors = errors || {};
            return {
                ...oldErrors,
                [field]: fieldErrors,
            };
        } else {
            return errors;
        }
    },
    null,
)
