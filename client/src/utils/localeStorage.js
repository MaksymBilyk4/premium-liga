export const saveToStorage = (name, data) => {
    if (!localStorage){
        return;
    }

    localStorage.setItem(name, data);
}
