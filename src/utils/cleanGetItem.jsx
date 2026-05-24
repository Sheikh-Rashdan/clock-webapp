function cleanGetItem(key, backup) {
    let result = localStorage.getItem(key);
    result = JSON.parse(result) || backup;
    return result;
}

export default cleanGetItem;