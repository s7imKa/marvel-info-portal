import BarLoader from 'react-spinners/BarLoader'

import './loader.css'

export default function Loader() {
	return (
        <div className='flex justify-center items-center h-40'>
            <BarLoader color='#ff1010' speedMultiplier={3} />
        </div>
    )
}
