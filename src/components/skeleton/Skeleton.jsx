import './skeleton.css'

export default function Skeleton() {
    return (
        <>
            <h1 className='titel-err'>Please select a character to see information</h1>
            <div className='char--basics'>
                <div className='skeleton-img'></div>
                <div className='char--info-content'>
                    <div className='skeleton-title'></div>
                    <div className='char-btns'>
                        <div className='skeleton-button'></div>
                        <div className='skeleton-button'></div>
                    </div>
                </div>
            </div>
            <div className='skeleton-text'>
                <div className='skeleton-line'></div>
                <div className='skeleton-line'></div>
            </div>
        </>
    )
}
