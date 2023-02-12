import { Ring } from '@uiball/loaders'

const Loader = ({colorAux}) => {
    return(
        <Ring 
        size={80}
        lineWeight={5}
        speed={2} 
        color={colorAux}
        />
    )
}

export default Loader;