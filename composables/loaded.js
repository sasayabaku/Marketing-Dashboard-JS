export const switch_func = (loaded) => (value) => (loaded.value = value);

export const useLoaded = () => {
    const status = useState('loaded', () => (false));
    return {
        loaded: readonly(status),
        switch_func: switch_func(status)
    }
}