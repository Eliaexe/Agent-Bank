export const saveToken = token => ({
    type: 'token/addToken',
    payload: token,
})

export const saveName = (name, lastName) => ({
    type: 'name/addName',
    payload: { name: name, lastName: lastName }
});

