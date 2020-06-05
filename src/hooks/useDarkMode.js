import useLocalStorage from './useLocalStorage'

const useDarkMode =(key, initialValue)=>{
    const [value, setValue] = useLocalStorage(key);

    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
        console.log(value)
        if (value === true){
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
      };
      
        
    }
    return [toggleMode, value];
}
export default useDarkMode;

