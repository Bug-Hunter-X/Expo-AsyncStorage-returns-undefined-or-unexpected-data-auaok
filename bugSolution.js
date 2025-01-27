import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null; 
  }
};

export const fetchDataAndProcess = async (key, value) => {
  await Promise.all([storeData(key, value), getData(key)]); // Ensure both complete
  const storedValue = await getData(key);
  console.log('Stored value:', storedValue);
  return storedValue;
};