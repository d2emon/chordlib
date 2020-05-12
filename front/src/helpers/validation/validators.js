export default {
    required: (value) => value
        ? 'Поле не может быть пустым'
        : undefined,
}
