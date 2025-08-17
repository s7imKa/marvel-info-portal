import ClipLoader from 'react-spinners/ClipLoader'

import './loader.css'

export default function Loader() {
	return (
		<div className='flex justify-center items-center h-40'>
			<ClipLoader color='#d73636ff' size={100} />
		</div>
	)
}
