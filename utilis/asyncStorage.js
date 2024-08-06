import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch(error) {
        console.log('error storing value :', error);
    }
}


export const getItem = async (key, value) => {
    try {
        const value = await AsyncStorage.getItem(key, value);
        return value
    } catch(error) {
        console.log('error retrieving value :', error);
    }
}

export const removeItem = async (key, value) => {
    try {
        await AsyncStorage.removeItem(key, value);
    } catch(error) {
        console.log('error deleting value :', error);
    }
}