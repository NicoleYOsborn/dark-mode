import useLocalStorage from './useLocalStorage'

const useDarkMode =(key, initialValue)=>{
    const [value, setValue] = useLocalStorage(false);

    const toggleDarkMode = value =>{
        if (value === true){
            document.body.classList.add(dark-mode);
        } else{
            document.body.classList.remove(dark-mode);
        }
    }
}
export default useDarkMode;